/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {EvoBalance} from '../EvoBalance';
import {render, waitFor} from '@testing-library/react-native';
import {ApolloProvider} from '@apollo/client';
import {client} from '../../../component/client/provider/clientprovider';
import {AuthContext} from '../../../contexts/auth';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

// Mock the AuthContext value with all required properties
const authContextValue = {
  isUpdate: false,
  setIsUpdate: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  walletData: {
    address: '',
    name: '',
    privateKey: '',
    balance: 0,
    coin: '',
  },
  setWalletData: () => {},
  transactionData: {
    address: '',
    addressTo: '',
    name: '',
    privateKey: '',
    balance: 0,
    coin: '',
    value: 0,
    fee: 0,
    convertFactor: 1,
  },
  setTransactionData: () => {},
  balanceSelected: 'general',
  setBalanceSelected: () => {},
  dataBalance: {
    getBalance: {
      __typename: 'Balance',
      day: [0, 0, 0, 0, 1, 5.33, 15],
      month: [0, 0, 0, 0, 0, 0],
      updateDate: '8/6/2023',
      week: [0, 0, 0, 0],
    },
  },
  setDataBalance: () => {},
  dollarPrice: 5,
  setDollarPrice: () => {},
  extract: {
    getExtract: [
      {
        hash: '',
        type: '',
        addressFrom: '',
        addressTo: '',
        value: 0,
        coinValue: 0,
        confirmed: false,
        date: new Date('01-01-19994'),
        fee: 0,
        balance: 0,
        prevout: 0,
      },
    ],
  },
  setExtract: () => {},
  walletList: {
    getFormatedData: [
      {
        address: '',
        balance: 0,
        price: 0,
        privateKey: '',
        coinPrice: 0,
        WalletType: '',
        totalBalance: 0,
      },
    ],
  },
  setWalletList: () => {},
};
describe('Evo Balance', () => {
  const component = (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={authContextValue}>
          {' '}
          <EvoBalance />
        </AuthContext.Provider>
      </ApolloProvider>
    </NavigationContainer>
  );
  it('should render the balance screen', async () => {
    const {getByText} = render(component);

    await waitFor(() => {
      // Check if the balance value is rendered
      expect(
        getByText('Proteja seu patrimônio aqui na Credit Black.'),
      ).toBeTruthy();
    });
    expect(getByText('diario')).toBeTruthy();
    expect(getByText('semanal')).toBeTruthy();
    expect(getByText('mensal')).toBeTruthy();
    expect(getByText('US$ 15.00')).toBeTruthy();
  });
});
