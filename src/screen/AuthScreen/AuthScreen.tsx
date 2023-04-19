import React, {useContext, useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {AuthContext} from '../../contexts/auth';
import {
  Container,
  InputContainer,
  InputStyled,
  Title,
  Error,
  ButtonText,
  SignButton,
  SignText,
  LoginButton,
} from './Auth.style';
import {useMutation} from '@apollo/client';
import {VERIFY_USER} from '../../component/client/queries/queries';
import config from '../../../config';
import {ActivityIndicator, StatusBar} from 'react-native';
import {Cypher} from './Cypher';
import Crypto from '../../component/services/ComunicationSystemsAuth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type AuthType = {
  email: string;
  password: string;
};

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function AuthScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {setIsAuthenticated} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [verifyUser] = useMutation(VERIFY_USER);
  const crypto = new Crypto();
  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleLogin = async ({email, password}: AuthType) => {
    const currentTimeMillis = new Date().getTime();
    const objToken = {
      passWord: Cypher(password),
      email: email,
      key: config.KEY_SECRET_MONGODB,
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
      const authResponse = JSON.parse(crypto.decrypt(data?.VerifyUser));

      const isExpiredToken = Boolean(nowCurrentTimeMillis > authResponse.timer);
      setIsLoading(false);
      if (isExpiredToken) {
        isAuth = false;
        setLoginError('Tempo de login expirado');
      } else {
        isAuth = authResponse.isAuthenticated;
        isAuth ? setIsAuthenticated(isAuth) : setLoginError('Senha Incorreta');
      }
    } catch (error: any) {
      console.error('Ocorreu um erro ao executar a consulta: ', error);
    } finally {
      setIsLoading(false);
      // limpa recursos ou atualiza a interface do usuário
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      <Container>
        <Title>Login</Title>

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
                <InputStyled
                  placeholder="Email"
                  placeholderTextColor="#ccc"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </InputContainer>

              <InputContainer>
                <InputStyled
                  placeholder="Password"
                  placeholderTextColor="#ccc"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
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

              <LoginButton onPress={handleSubmit}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <ButtonText>Sign In</ButtonText>
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
