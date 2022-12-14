import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import {TransactionScreen} from './TransactionScreen';
import {MockedProvider} from '@apollo/client/testing';
import {WalletMock} from '../HomeScreen/walletMock';
import {mockRoute} from './mock';
import {GetCoinPrice} from './GetCoinPrice';
import {act} from 'react-test-renderer';

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
      <TransactionScreen route={mockRoute} />
    </MockedProvider>
  </NavigationContainer>
);

describe('it render transactional screen', () => {
  it('render Transactional screen', async () => {
    jest.useFakeTimers();
    render(component);

    const send = await screen.findByText('Enviar');
    const goBack = await screen.findByText('Voltar');
    const walletAlert = await screen.findByText(
      'O valor pode sofrer alteração de acordo com a taxa de rede e variações de preços no momento do envio.',
    );
    const value = await screen.findByText('U$ 0.00');

    expect(send).toBeTruthy();
    expect(goBack).toBeTruthy();
    expect(walletAlert).toBeTruthy();
    expect(value).toBeTruthy();
  });

  it('render should return to home screen', async () => {
    jest.useFakeTimers();
    render(component);

    fireEvent.press(screen.getByText('Voltar'));
    await waitFor(() => {
      expect(mockedNavigate).toBeCalledWith('Home');
    });
  });

  it('render should change value show this.', async () => {
    jest.useFakeTimers();
    render(component);
    const sendAmount = 1;
    const actualCoinPrice = await GetCoinPrice('BTC');
    const US = Number(sendAmount) * actualCoinPrice;

    act(() => {
      fireEvent.changeText(screen.getByTestId('valueInput'), `${sendAmount}`);
    });
    await waitFor(async () => {
      expect(await screen.findByText(`U$ ${US.toFixed(2)}`)).toBeTruthy();
    });
  });
});
