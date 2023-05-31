import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {ForgotScreen} from '../ForgotScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import config from '../../../../config';

const client = new ApolloClient({
  uri: config.API_HEROKU, // substitua pela URL do seu servidor GraphQL
  cache: new InMemoryCache(),
});

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      goBack: mockedNavigate,
    }),
  };
});
describe('Forgot Screen', () => {
  const component = (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <ForgotScreen />
      </ApolloProvider>
    </NavigationContainer>
  );
  it('render forgot screen', async () => {
    const {getByText} = render(component);

    await waitFor(() => {
      expect(getByText('Digite seu Email abaixo')).toBeTruthy();
      expect(getByText('Enviar código')).toBeTruthy();
      expect(getByText('Cancelar')).toBeTruthy();
    });
  });

  it('Voltar para tela de login', () => {
    const {getByText} = render(component);
    const buttonCancel = getByText('Cancelar');

    fireEvent.press(buttonCancel);

    expect(mockedNavigate).toHaveBeenCalledWith();
  });
});
