/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {AuthContext} from '../../contexts/auth';
import {
  Container,
  InputContainer,
  InputStyled,
  Error,
  ButtonText,
  SignButton,
  SignText,
  LoginButton,
  TextLabel,
  InputStyledPassword,
  InputContent,
  EyeContainer,
  ContainerLabel,
  ForgotPasswordText,
  ForgotPasswordContainer,
} from './Auth.style';
import {useMutation} from '@apollo/client';
import {VERIFY_USER} from '../../component/client/queries/queries';
import {ActivityIndicator, StatusBar} from 'react-native';
import {Cypher} from './Cypher';
import Crypto from '../../component/services/ComunicationSystemsAuth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import AuthStore from './AuthStore';
import CreditBlackIcon from '../../assets/logo-creditBlack.svg';
import EyeIcon from '../../assets/Eye.svg';
import EyeClosedIcon from '../../assets/eye-closed.svg';

type AuthType = {
  email: string;
  password: string;
};

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('O seu email é inválido')
    .required('O email é obrigatório'),
  password: yup.string().required('Sua senha está incorreta!'),
});

export function AuthScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {setIsAuthenticated} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [verifyUser] = useMutation(VERIFY_USER);
  const [eyeClosed, setEyeClosed] = useState<boolean>(true);
  const crypto = new Crypto();

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleForgot = () => {
    navigation.navigate('ForgotScreen');
  };
  const handleLogin = async ({email, password}: AuthType) => {
    const currentTimeMillis = new Date().getTime();
    const objToken = {
      passWord: Cypher(password),
      email: email,
      timer: currentTimeMillis,
    };
    const objTokenText = JSON.stringify(objToken);

    try {
      setIsLoading(true);
      let isAuth = false;
      const {data} = await verifyUser({
        variables: {
          token: crypto.encrypt(objTokenText),
        },
      });

      const nowCurrentTimeMillis = new Date().getTime();
      const authResponse = JSON.parse(await crypto.decrypt(data?.VerifyUser));

      const isExpiredToken = Boolean(nowCurrentTimeMillis > authResponse.timer);
      setIsLoading(false);
      if (isExpiredToken) {
        isAuth = false;
        setLoginError('Tempo de login expirado');
      } else {
        const loginInstance = AuthStore.getInstance();
        loginInstance.setEmail(authResponse.email);
        isAuth = authResponse.isAuthenticated;
        isAuth ? setIsAuthenticated(isAuth) : setLoginError('Senha Incorreta');
      }
    } catch (error: any) {
      setLoginError('Ocorreu um erro ao executar a consulta: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#f2f3f5" barStyle="dark-content" />
      <Container>
        <CreditBlackIcon width={100} height={100} style={{marginBottom: 30}} />
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <InputContainer>
                <TextLabel>Email</TextLabel>
                <InputStyled
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </InputContainer>

              <InputContainer>
                <ContainerLabel>
                  <TextLabel>Senha</TextLabel>
                  <ForgotPasswordContainer onPress={handleForgot}>
                    <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
                  </ForgotPasswordContainer>
                </ContainerLabel>
                <InputContent>
                  <InputStyledPassword
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
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

                {touched.password && (
                  <Error>
                    {errors.password
                      ? errors.password
                      : loginError
                      ? loginError
                      : ''}
                  </Error>
                )}
              </InputContainer>

              <LoginButton
                disabled={
                  !(values.email.length > 0 && values.password.length > 0)
                }
                onPress={handleSubmit}
                style={{
                  backgroundColor:
                    values.email.length > 0 && values.password.length > 0
                      ? '#624aa7'
                      : '#624aa770',
                }}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <ButtonText>Entrar</ButtonText>
                )}
              </LoginButton>

              <SignButton onPress={handleSignUp}>
                <SignText>Cadastre-se</SignText>
              </SignButton>
            </>
          )}
        </Formik>
      </Container>
    </>
  );
}
