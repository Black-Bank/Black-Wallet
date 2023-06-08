import React from 'react';
import {SignupScreen} from '../SignUpScreen';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {client} from '../../../component/client/provider/clientprovider';
import {ApolloProvider} from '@apollo/client';

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
      expect(getByText('Cadastro')).toBeTruthy();
      expect(getByText('Seguir')).toBeTruthy();
      expect(getByText('Cancelar')).toBeTruthy();
    });
  });

  it('Voltar para tela de login', () => {
    const {getByText} = render(component);

    const buttonCancelar = getByText('Cancelar');

    fireEvent.press(buttonCancelar);

    expect(mockedNavigate).toHaveBeenCalledWith();
  });
});
