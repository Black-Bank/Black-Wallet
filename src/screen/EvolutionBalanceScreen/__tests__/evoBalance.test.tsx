/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {EvoBalance} from '../EvoBalance';
import {render} from '@testing-library/react-native';
import {ApolloProvider} from '@apollo/client';
import {client} from '../../../component/client/provider/clientprovider';

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
