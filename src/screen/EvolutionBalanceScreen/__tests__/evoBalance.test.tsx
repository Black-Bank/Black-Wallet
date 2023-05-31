/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {EvoBalance} from '../EvoBalance';
import {render} from '@testing-library/react-native';
import config from '../../../../config';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

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
describe('Evo Balance', () => {
  const component = (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <EvoBalance />
      </ApolloProvider>
    </NavigationContainer>
  );
  it('renderização da tela de Balanço', () => {
    render(component);
  });
});
