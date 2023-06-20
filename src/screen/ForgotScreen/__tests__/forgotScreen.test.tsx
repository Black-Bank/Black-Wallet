import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ForgotScreen} from '../ForgotScreen';
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

    expect(
      getByText(
        'Digite seu endereço de e-mail e enviaremos instruções de redefinição de senha.',
      ),
    ).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Recuperar senha')).toBeTruthy();
    expect(getByText('Cancelar')).toBeTruthy();
  });

  it('Voltar para tela de login', () => {
    const {getByText} = render(component);
    const buttonCancel = getByText('Cancelar');

    fireEvent.press(buttonCancel);

    expect(mockedNavigate).toHaveBeenCalledWith();
  });
});
