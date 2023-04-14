import React, {useContext} from 'react';
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

type AuthType = {
  email: string;
  password: string;
};
type isAuthType = {
  verifyUser: boolean;
};
const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function AuthScreen() {
  const {setIsAuthenticated} = useContext(AuthContext);

  const [verifyUser] = useMutation(VERIFY_USER);

  const handleLogin = async ({email, password}: AuthType) => {
    try {
      const {data} = await verifyUser({
        variables: {
          passWord: password,
          email: email,
          key: config.KEY_SECRET_MONGODB,
        },
      });
      const isAuth = Boolean(data?.VerifyUser);
      setIsAuthenticated(isAuth);
    } catch (error) {
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
              {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
            </InputContainer>

            <LoginButton onPress={handleSubmit}>
              <ButtonText>Login</ButtonText>
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
