import React from 'react';
import {render} from '@testing-library/react-native';
import {WalletListScreen} from '../../WalletListScreen/WalletListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {client} from '../../../component/client/provider/clientprovider';
import {AuthContext} from '../../../contexts/auth';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({
      name: mockedNavigate,
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
describe('WalletListScreen', () => {
  const component = (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AuthContext.Provider value={authContextValue}>
          <WalletListScreen />
        </AuthContext.Provider>
      </NavigationContainer>
    </ApolloProvider>
  );
  it('should render wallet list screen', async () => {
    const {getByText} = render(component);

    expect(getByText('Carteiras')).toBeTruthy();
  });
});
