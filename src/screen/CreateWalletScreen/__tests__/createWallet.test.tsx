import React from 'react';
import {render} from '@testing-library/react-native';
import {CreateWallet} from '../CreateWallet';
import {NavigationContainer} from '@react-navigation/native';
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
