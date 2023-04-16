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
import {ActivityIndicator} from 'react-native';
import {Cypher} from './Cypher';
import Crypto from '../../component/services/ComunicationSystemsAuth';

type AuthType = {
  email: string;
  password: string;
};

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function AuthScreen() {
  const {setIsAuthenticated} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [verifyUser] = useMutation(VERIFY_USER);
  const crypto = new Crypto();

  const handleLogin = async ({email, password}: AuthType) => {
    const objToken = {
      passWord: Cypher(password),
      email: email,
      key: config.KEY_SECRET_MONGODB,
    };
    const objTokenText = JSON.stringify(objToken);

    try {
      setIsLoading(true);
      const {data} = await verifyUser({
        variables: {
          token: crypto.encrypt(objTokenText),
        },
      });
      const isAuth = Boolean(data?.VerifyUser);
      setIsLoading(false);
      if (isAuth === false) {
        setLoginError('Senha Incorreta');
      }
      setIsAuthenticated(isAuth);
    } catch (error) {
      setIsLoading(false);
      console.error('Ocorreu um erro ao executar a consulta: ', error);
    }
  };

  return (
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
                <ButtonText>Login</ButtonText>
              )}
            </LoginButton>

            <SignButton onPress={() => console.log('Cadastro')}>
              <SignText>Cadastre-se</SignText>
            </SignButton>
          </>
        )}
      </Formik>
    </Container>
  );
}
