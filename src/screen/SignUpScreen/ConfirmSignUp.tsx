/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import {TextInput} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ButtonContainer,
  CodeInput,
  CodeinputContainer,
  ConfirmationButton,
  ConfirmationButtonText,
  Container,
  ContainerText,
  NotReceived,
  RemainderButton,
  RemainderButtonText,
  TimeContainer,
  Title,
  Description,
  TextEmail,
  Content,
} from './ConfirmationSignUp.style';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {FormatMinutes} from '../../component/utils/functions/FormatMinutes';
import {useMutation} from '@apollo/client';
import {
  CREATE_USER,
  SEND_CODE_EMAIL,
} from '../../component/client/queries/queries';
import Crypto from '../../component/services/ComunicationSystemsAuth';
import {ActivityIndicator} from 'react-native-paper';
import {Cypher} from '../AuthScreen/Cypher';

interface ConfirmationScreenProps {
  route?: {
    params: {
      email: string;
      code: string;
      password: string;
    };
  };
}

export function ConfirmSignUpScreen({route}: ConfirmationScreenProps) {
  const crypto = new Crypto();
  const {email, code, password} = route!.params;
  const [SendCode] = useMutation(SEND_CODE_EMAIL);
  const [codeInput, setCode] = useState('');
  const [RemaindCode, setRemaindCode] = useState<string>('');
  const [createUser] = useMutation(CREATE_USER);
  const codeFields = useRef<(TextInput | null)[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const expTime = 500000;

  const [timeRemaining, setTimeRemaining] = useState<number>(expTime);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCount, setIsCount] = useState<boolean>(false);

  useEffect(() => {
    // decrementa o tempo restante a cada segundo
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1000;
        } else {
          clearInterval(intervalId);
          return prevTime;
        }
      });
    }, 1000);

    // limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [isCount]);
  const handleCodeChange = (text: string, index: number) => {
    const newCode = codeInput.split('');
    newCode[index] = text;
    setCode(newCode.join(''));
    if (index < codeFields.current.length - 1 && text !== '') {
      codeFields.current[index + 1]?.focus();
    }
  };

  const handleDelete = (index: number) => {
    if (index > 0) {
      codeFields.current[index - 1]?.focus();
    } else {
      codeFields.current[0]?.focus();
    }
    const newCode = codeInput.split('');
    newCode[index] = '';
    setCode(newCode.join(''));
  };

  const handleSignup = async () => {
    setIsLoading(true);
    const objToken = {
      passWord: Cypher(password),
      email: email,
    };
    const objTokenText = JSON.stringify(objToken);

    try {
      setIsLoading(true);
      const {data} = await createUser({
        variables: {
          token: crypto.encrypt(objTokenText),
        },
      });

      if (data.CreateUser) {
        Toast.show({
          type: 'success',
          text1: 'Usuário criado com sucesso',
          visibilityTime: 3000,
          autoHide: true,
        });
        setTimeout(() => navigation.navigate('AuthScreen'), 3000);
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error.message
          ? error.message
          : 'Não foi possível cadastrar o usuário',
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmCode = () => {
    const text = codeInput.toUpperCase();
    if (timeRemaining <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Código Expirado',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (code === text || Boolean(RemaindCode && RemaindCode === text)) {
      handleSignup();
    } else {
      Toast.show({
        type: 'error',
        text1: 'Código incorreto',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  const handleReSendCode = async () => {
    setIsLoading(true);

    try {
      const {data} = await SendCode({
        variables: {
          email: email,
        },
      });
      setRemaindCode(await crypto.decrypt(data.SendCodePassEmail.code));

      Toast.show({
        type: 'success',
        text1: 'Código enviado com sucesso',
        visibilityTime: 3000,
        autoHide: true,
      });
      setTimeRemaining(expTime);
      setIsCount(!isCount);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Não foi enviar o código para este email',
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Content>
        <Title>Enviamos um código de segurança para o email</Title>
        <TextEmail>{email}</TextEmail>
        <Description>
          Nos informe o código para continuar o seu cadastro
        </Description>

        <CodeinputContainer>
          {Array.from({length: 6}, (_, index) => (
            <CodeInput
              key={index}
              value={codeInput[index]}
              onChangeText={(text: string) => handleCodeChange(text, index)}
              maxLength={1}
              ref={(input: TextInput | null) =>
                (codeFields.current[index] = input)
              }
              onDelete={() => handleDelete(index)}
              onKeyPress={({nativeEvent}: {nativeEvent: any}) => {
                if (nativeEvent.key === 'Backspace' && !codeInput[index]) {
                  handleDelete(index);
                }
              }}
            />
          ))}
        </CodeinputContainer>

        <ButtonContainer>
          <ConfirmationButton
            onPress={handleConfirmCode}
            disabled={codeInput.length < 6}
            style={{
              backgroundColor: codeInput.length === 6 ? '#624AA7' : '#624AA770',
            }}>
            <ConfirmationButtonText>Confirmar</ConfirmationButtonText>
          </ConfirmationButton>
        </ButtonContainer>

        <TimeContainer>
          <ContainerText>{FormatMinutes(timeRemaining)}</ContainerText>
        </TimeContainer>

        <NotReceived>
          Não recebeu o seu código? Verifique na caixa de spam ou tente
          novamente
        </NotReceived>
        {timeRemaining === 0 && (
          <RemainderButton onPress={handleReSendCode}>
            <RemainderButtonText>Reenviar</RemainderButtonText>
          </RemainderButton>
        )}
      </Content>
    </Container>
  );
}
