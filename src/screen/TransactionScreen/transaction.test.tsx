import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen} from '@testing-library/react-native';
import {TransactionScreen} from './TransactionScreen';
import {MockedProvider} from '@apollo/client/testing';
import {WalletMock} from '../HomeScreen/walletMock';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const component = (
  <NavigationContainer>
    <MockedProvider mocks={WalletMock}>
      <TransactionScreen />
    </MockedProvider>
  </NavigationContainer>
);

describe('it render transactional screen', () => {
  it('render Transactional screen', async () => {
    jest.useFakeTimers();
    render(component);

    const send = await screen.findByText('Enviar de:');
    const value = await screen.findByText('Enviar para:');
    const checkAdress = await screen.findByText(
      'O endereço da carteira é compatível',
    );
    const checkValue = await screen.findByText(
      'O valor deve ser maior que zero',
    );

    const checkValueTax = await screen.findByText(
      'O valor deve ser menor que o saldo mais a taxa',
    );
    expect(send).toBeTruthy();
    expect(value).toBeTruthy();
    expect(checkAdress).toBeTruthy();
    expect(checkValue).toBeTruthy();
    expect(checkValueTax).toBeTruthy();
  });
});
