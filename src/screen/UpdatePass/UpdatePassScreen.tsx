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
} from './UpdatePass.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, StatusBar} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {UPDATE_PASS} from '../../component/client/queries/queries';
import {useMutation} from '@apollo/client';
import Toast from 'react-native-toast-message';

const validationSchema = yup.object().shape({
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

  const handleChangePass = async (values: any) => {
    setIsLoading(true);

    try {
      setIsLoading(true);
      const {data} = await UpdatePass({
        variables: {
          email: email,
          passWord: values.password,
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
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        onSubmit={handleChangePass}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <Container marginTop={StatusBar.currentHeight}>
            <Title>Redefinir senha</Title>

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
                <ButtonText>Redefinir Senha</ButtonText>
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
