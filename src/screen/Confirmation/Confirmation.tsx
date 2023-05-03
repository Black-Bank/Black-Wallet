import React, {useState, useRef, useEffect} from 'react';
import {TextInput} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  ButtonContainer,
  CancelButton,
  CancelButtonText,
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
} from './Confirmation.style';
import {Description} from './Confirmation.style';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {FormatMinutes} from '../../component/utils/functions/FormatMinutes';
import {useMutation} from '@apollo/client';
import {SEND_CODE_EMAIL} from '../../component/client/queries/queries';
import Crypto from '../../component/services/ComunicationSystemsAuth';
import {ActivityIndicator} from 'react-native-paper';

interface ConfirmationScreenProps {
  route?: {
    params: {
      email: string;
      code: string;
    };
  };
}

export function ConfirmCodeScreen({route}: ConfirmationScreenProps) {
  const crypto = new Crypto();
  const {email, code} = route!.params;
  const [SendCode] = useMutation(SEND_CODE_EMAIL);
  const [codeInput, setCode] = useState('');
  const [RemaindCode, setRemaindCode] = useState<string>('');
  const codeFields = useRef<(TextInput | null)[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const expTime = 120000;

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
      navigation.navigate('UpdatePassScreen', {
        email: email,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Código incorreto',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };
  const handleCancel = () => {
    navigation.navigate('AuthScreen');
  };

  const handleReSendCode = async () => {
    setIsLoading(true);

    try {
      const {data} = await SendCode({
        variables: {
          email: email,
        },
      });
      setRemaindCode(crypto.decrypt(data.SendCodePassEmail.code));

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
      <Title>Código de confirmação</Title>
      <Description>
        Para sua segurança, por favor, confirme o código enviado para: {email}
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
        {timeRemaining > 0 ? (
          <ConfirmationButton onPress={handleConfirmCode}>
            <ConfirmationButtonText>Confirmar código</ConfirmationButtonText>
          </ConfirmationButton>
        ) : isLoading ? (
          <ActivityIndicator />
        ) : (
          <RemainderButton onPress={handleReSendCode}>
            <RemainderButtonText>Reenviar Código</RemainderButtonText>
          </RemainderButton>
        )}
        <CancelButton onPress={handleCancel}>
          <CancelButtonText>Cancelar</CancelButtonText>
        </CancelButton>
      </ButtonContainer>

      <TimeContainer>
        <ContainerText>{FormatMinutes(timeRemaining)}</ContainerText>
      </TimeContainer>

      <NotReceived>
        Não Recebeu seu código? Verifique na caixa de span ou tente novamente.
      </NotReceived>
    </Container>
  );
}