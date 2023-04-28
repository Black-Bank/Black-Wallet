/* eslint-disable no-extra-boolean-cast */
import React, {useState} from 'react';
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
import {CREATE_USER} from '../../component/client/queries/queries';
import {useMutation} from '@apollo/client';
import Crypto from '../../component/services/ComunicationSystemsAuth';
import {Cypher} from '../AuthScreen/Cypher';
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
  const [createUser] = useMutation(CREATE_USER);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignup = async (values: any) => {
    setIsLoading(true);
    const objToken = {
      passWord: Cypher(values.password),
      email: values.email,
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
        setTimeout(() => navigation.goBack(), 3000);
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

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        onSubmit={handleSignup}
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
                <ButtonText>Cadastrar</ButtonText>
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
