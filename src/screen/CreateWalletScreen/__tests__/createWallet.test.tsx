import React from 'react';
import {render} from '@testing-library/react-native';
import {CreateWallet} from '../CreateWallet';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
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
      navigate: mockedNavigate,
    }),
  };
});
describe('Create Wallet', () => {
  const component = (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <CreateWallet />
      </ApolloProvider>
    </NavigationContainer>
  );
  it('renderização da tela de criar carteira', () => {
    const {getByText} = render(component);

    expect(getByText('Criar carteira')).toBeTruthy();
    expect(getByText('Criar')).toBeTruthy();
  });
});
