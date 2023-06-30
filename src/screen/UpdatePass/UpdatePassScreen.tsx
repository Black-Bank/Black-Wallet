import React, {useState, useEffect} from 'react';
import {
  Button,
  ButtonText,
  Container,
  InputContainer,
  InputStyled,
  Error,
  InputContent,
  TextLabel,
  ButtonCancel,
  ButtonTextCancel,
  EyeContainer,
} from './UpdatePass.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, StatusBar} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {UPDATE_PASS} from '../../component/client/queries/queries';
import {useMutation} from '@apollo/client';
import Toast from 'react-native-toast-message';
import {Cypher} from '../AuthScreen/Cypher';
import EyeIcon from '../../assets/Eye.svg';
import EyeClosedIcon from '../../assets/eye-closed.svg';
import RulesForm from '../../component/rulesForm/RulesForm';

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, '8')
    .matches(/[@#$%^&+=]/, 'especial')
    .matches(/[A-Z]/, 'maiuscula')
    .matches(/[a-z]/, 'minuscula')
    .matches(/[0-9]/, 'numero')
    .required('A senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas precisam ser iguais')
    .required('Confirme a senha'),
});

interface UpdateScreenProps {
  route?: {
    params: {
      email: string;
    };
  };
}

export function UpdatePassScreen({route}: UpdateScreenProps) {
  const {email} = route!.params;
  const [UpdatePass] = useMutation(UPDATE_PASS);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [eyeClosed, setEyeClosed] = useState<boolean>(true);

  const [password, setPassword] = useState<String>('');
  const [confirmPassword, setConfirmPassword] = useState<String>('');
  const [quantity, setQuantity] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [special, setSpecial] = useState<boolean>(false);
  const [number, setNumber] = useState<boolean>(false);
  const params = {quantity, lowercase, uppercase, special, number, password};

  useEffect(() => {
    const data = {
      password: password,
      confirmPassword: confirmPassword,
    };
    validationSchema
      .validate(data, {abortEarly: false})
      .catch(validationError => {
        const errors = validationError.errors;
        setQuantity(!errors.includes('8'));
        setSpecial(!errors.includes('especial'));
        setUppercase(!errors.includes('maiuscula'));
        setLowercase(!errors.includes('minuscula'));
        setNumber(!errors.includes('numero'));
      });
  }, [password, confirmPassword]);

  const handleChangePass = async (values: any) => {
    setIsLoading(true);

    try {
      setIsLoading(true);
      const {data} = await UpdatePass({
        variables: {
          email: email,
          passWord: Cypher(values.password),
        },
      });

      if (data.UpdatePass) {
        Toast.show({
          type: 'success',
          text1: 'Senha Alterada com Sucesso',
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
          : 'Não foi possível Alterar a Senha, tente novamente',
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  23;

  const handleCancel = () => {
    navigation.navigate('AuthScreen');
  };

  return (
    <>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        onSubmit={handleChangePass}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <Container marginTop={StatusBar.currentHeight}>
            <InputContainer>
              <TextLabel>Nova Senha</TextLabel>
              <InputContent>
                <InputStyled
                  value={values.password}
                  onChangeText={(text: any) => {
                    handleChange('password')(text);
                    setPassword(text);
                  }}
                  secureTextEntry={eyeClosed}
                />
                <EyeContainer onPress={() => setEyeClosed(!eyeClosed)}>
                  {eyeClosed ? (
                    <EyeClosedIcon width={25} />
                  ) : (
                    <EyeIcon width={25} />
                  )}
                </EyeContainer>
              </InputContent>
            </InputContainer>
            <RulesForm params={params} />
            <InputContainer>
              <TextLabel>Confirme a sua senha</TextLabel>
              <InputContent>
                <InputStyled
                  value={values.confirmPassword}
                  onChangeText={(text: any) => {
                    handleChange('confirmPassword')(text);
                    setConfirmPassword(text);
                  }}
                  secureTextEntry={eyeClosed}
                />
                <EyeContainer onPress={() => setEyeClosed(!eyeClosed)}>
                  {eyeClosed ? (
                    <EyeClosedIcon width={25} />
                  ) : (
                    <EyeIcon width={25} />
                  )}
                </EyeContainer>
              </InputContent>
              {errors.confirmPassword && touched.confirmPassword && (
                <Error>{errors.confirmPassword}</Error>
              )}
            </InputContainer>
            <Button onPress={handleSubmit}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <ButtonText>Redefinir Senha</ButtonText>
              )}
            </Button>
            <ButtonCancel onPress={handleCancel}>
              <ButtonTextCancel>Cancelar</ButtonTextCancel>
            </ButtonCancel>
          </Container>
        )}
      </Formik>
    </>
  );
}
