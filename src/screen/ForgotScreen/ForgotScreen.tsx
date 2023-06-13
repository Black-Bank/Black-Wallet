/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  ButtonSend,
  ButtonText,
  Container,
  InputContainer,
  InputStyled,
  Text,
  Error,
  ButtonCancel,
  ButtonTextCancel,
  TextLabel,
} from './ForgotScreen.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, StatusBar} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';
import {useMutation} from '@apollo/client';
import {SEND_CODE_EMAIL} from '../../component/client/queries/queries';
import Crypto from '../../component/services/ComunicationSystemsAuth';
import CreditBlackIcon from '../../assets/logo-creditBlack.svg';

const crypto = new Crypto();
const validationSchema = yup.object().shape({
  email: yup.string().email('Email Inválido').required('O email é obrigatório'),
});

export function ForgotScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [SendCode] = useMutation(SEND_CODE_EMAIL);

  const handleConfirmation = () => {
    navigation.navigate('ConfirmationScreen', {
      email: email,
      code: code,
    });
  };
  const handleSendCode = async (values: {email: string; code?: string}) => {
    setIsLoading(true);
    setEmail(values.email);
    try {
      const {data} = await SendCode({
        variables: {
          email: values.email,
        },
      });
      setCode(await crypto.decrypt(data.SendCodePassEmail.code));

      Toast.show({
        type: 'success',
        text1: 'O código foi enviado para o seu email',
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error.message,
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

  useEffect(() => {
    if (code.length && email.length) {
      setTimeout(handleConfirmation, 3000);
    }
  }, [code]);

  return (
    <>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <Formik
        initialValues={{email: ''}}
        onSubmit={handleSendCode}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <Container marginTop={StatusBar.currentHeight}>
            <CreditBlackIcon width={110} height={110} />
            <Text>
              Digite seu endereço de e-mail e enviaremos instruções de
              redefinição de senha.
            </Text>
            <InputContainer>
              <TextLabel>Email</TextLabel>
              <InputStyled
                value={values.email}
                onChangeText={handleChange('email')}
                autoCapitalize="none"
              />
              {errors.email && touched.email && <Error>{errors.email}</Error>}
            </InputContainer>
            <ButtonSend
              onPress={handleSubmit}
              disabled={values.email.length === 0}
              style={{
                backgroundColor:
                  values.email.length === 0 ? '#624AA770' : '#624AA7',
              }}>
              {isLoading ? (
                <ActivityIndicator size="small" />
              ) : (
                <ButtonText>Recupera senha</ButtonText>
              )}
            </ButtonSend>
            <ButtonCancel onPress={handleCancel}>
              <ButtonTextCancel>Cancelar</ButtonTextCancel>
            </ButtonCancel>
          </Container>
        )}
      </Formik>
    </>
  );
}
