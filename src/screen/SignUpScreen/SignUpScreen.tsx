/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Button,
  ButtonText,
  Container,
  InputContainer,
  Error,
  InputStyled,
  InputContent,
  InputStyledEmail,
  TextLabel,
  EyeContainer,
} from './SignUpScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, StatusBar} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {SEND_CODE_SIGNUP_EMAIL} from '../../component/client/queries/queries';
import {useMutation} from '@apollo/client';
import Crypto from '../../component/services/ComunicationSystemsAuth';
import Toast from 'react-native-toast-message';
import CreditBlackIcon from '../../assets/logo-creditBlack.svg';
import EyeIcon from '../../assets/Eye.svg';
import RulesForm from '../../component/rulesForm/RulesForm';
import EyeClosedIcon from '../../assets/eye-closed.svg';

const validationSchema = yup.object().shape({
  email: yup.string().email('Email Inválido').required('O email é obrigatório'),
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

export function SignupScreen() {
  const crypto = new Crypto();
  const [SendCode] = useMutation(SEND_CODE_SIGNUP_EMAIL);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [eyeClosed, setEyeClosed] = useState<boolean>(true);
  const [code, setCode] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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

  const handleContinue = async (values: {password: string; email: string}) => {
    setIsLoading(true);

    try {
      setEmail(values.email);
      setPassword(values.password);
      const {data} = await SendCode({
        variables: {
          email: values.email,
        },
      });
      setCode(await crypto.decrypt(data.SendSignUpCodePassEmail.code));

      Toast.show({
        type: 'success',
        text1: 'Código enviado com sucesso',
        visibilityTime: 3000,
        autoHide: true,
      });
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

  const handleConfirmation = () => {
    navigation.navigate('ConfirmationSignUpScreen', {
      email: email,
      code: code,
      password: password,
    });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (code.length && email.length && password.length) {
      setTimeout(handleConfirmation, 3000);
    }
  }, [code, email]);

  return (
    <>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        onSubmit={handleContinue}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <Container marginTop={StatusBar.currentHeight}>
            <CreditBlackIcon width={80} height={80} />
            <InputContainer>
              <TextLabel>Email</TextLabel>
              <InputStyledEmail
                value={values.email}
                onChangeText={handleChange('email')}
                autoCapitalize="none"
              />
              {errors.email && touched.email && <Error>{errors.email}</Error>}
            </InputContainer>
            <InputContainer style={{marginBottom: -15, marginTop: 10}}>
              <TextLabel>Senha</TextLabel>
              <InputContent>
                <InputStyled
                  value={values.password}
                  onChangeText={(text: string) => {
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
            <InputContainer style={{marginTop: -18}}>
              <TextLabel>Confirme a sua senha</TextLabel>
              <InputContent>
                <InputStyled
                  value={values.confirmPassword}
                  onChangeText={(text: string) => {
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
            <Button
              disabled={Boolean(
                confirmPassword.length > 0 &&
                  password.length > 0 &&
                  email.length > 0,
              )}
              onPress={handleSubmit}
              style={{
                backgroundColor:
                  values.email.length > 0 &&
                  password.length > 0 &&
                  confirmPassword.length > 0
                    ? '#624AA7'
                    : '#624AA770',
              }}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <ButtonText>Seguir</ButtonText>
              )}
            </Button>
            <Button onPress={handleCancel}>
              <ButtonText style={{color: '#624AA7'}}>
                Já possuo uma conta
              </ButtonText>
            </Button>
          </Container>
        )}
      </Formik>
    </>
  );
}
