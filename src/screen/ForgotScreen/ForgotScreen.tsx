import React, {useState} from 'react';
import {
  Button,
  ButtonText,
  Container,
  InputContainer,
  InputStyled,
  Title,
  Error,
} from '../SignUpScreen/SignUpScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, StatusBar} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';

const validationSchema = yup.object().shape({
  email: yup.string().email('Email Inválido').required('O email é obrigatório'),
});

export function ForgotScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [code, setCode] = useState<number>();

  const handleSendCode = async (values: any) => {
    setIsLoading(true);

    // Simula o envio do código para o email informado
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    setCode(randomNumber);

    Toast.show({
      type: 'success',
      text1: 'Código enviado com sucesso',
      visibilityTime: 3000,
      autoHide: true,
    });
    const handleConfirmation = () => {
      navigation.navigate('AuthScreen', {
        email: values.email,
        code: randomNumber,
      });
    };

    setIsLoading(false);
    setTimeout(handleConfirmation, 3000);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      <Formik
        initialValues={{email: ''}}
        onSubmit={handleSendCode}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <Container marginTop={StatusBar.currentHeight}>
            <Title>Esqueci minha senha</Title>
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
            <Button onPress={handleSubmit}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <ButtonText>Enviar código</ButtonText>
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
