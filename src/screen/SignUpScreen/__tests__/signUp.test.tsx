import React from 'react';
import {SignupScreen} from '../SignUpScreen';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {client} from '../../../component/client/provider/clientprovider';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      goBack: mockedNavigate,
    }),
  };
});
describe('Sign Up screen', () => {
  const component = (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <SignupScreen />
      </ApolloProvider>
    </NavigationContainer>
  );
  it('render sign up screen', async () => {
    const {getByText} = render(component);

    await waitFor(() => {
      expect(getByText('Email')).toBeTruthy();
      expect(getByText('Senha')).toBeTruthy();
      expect(getByText('Confirme a sua senha')).toBeTruthy();
      expect(getByText('Seguir')).toBeTruthy();
      expect(getByText('Já possuo uma conta')).toBeTruthy();
    });
  });

  it('Voltar para tela de login', () => {
    const {getByText} = render(component);

    const buttonCancelar = getByText('Já possuo uma conta');

    fireEvent.press(buttonCancelar);

    expect(mockedNavigate).toHaveBeenCalledWith();
  });
});
