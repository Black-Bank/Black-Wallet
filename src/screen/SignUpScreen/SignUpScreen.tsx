/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Button,
  ButtonText,
  Container,
  InputContainer,
  InputStyled,
  Title,
  Error,
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

const validationSchema = yup.object().shape({
  email: yup.string().email('Email Inválido').required('O email é obrigatório'),
  password: yup
    .string()
    .min(8, 'Senha precisa ter pelo menos 8 caracteres')
    .matches(/[@#$%^&+=]/, 'Senha precisa ter pelo menos um caractere especial')
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
  const [code, setCode] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        onSubmit={handleContinue}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <Container marginTop={StatusBar.currentHeight}>
            <Title>Cadastro</Title>
            <InputContainer>
              <InputStyled
                placeholderTextColor="#ccc"
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                autoCapitalize="none"
              />
              {errors.email && touched.email && <Error>{errors.email}</Error>}
            </InputContainer>
            <InputContainer>
              <InputStyled
                placeholderTextColor="#ccc"
                placeholder="Senha"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Error>{errors.password}</Error>
              )}
            </InputContainer>
            <InputContainer>
              <InputStyled
                placeholderTextColor="#ccc"
                placeholder="Confirme a senha"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Error>{errors.confirmPassword}</Error>
              )}
            </InputContainer>
            <Button onPress={handleSubmit}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <ButtonText>Seguir</ButtonText>
              )}
            </Button>
            <Button onPress={handleCancel}>
              <ButtonText>Cancelar</ButtonText>
            </Button>
          </Container>
        )}
      </Formik>
    </>
  );
}
