import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import {WalletScren} from './WalletScren';
import {mockRoute} from './mock';
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
      <WalletScren route={mockRoute} />
    </MockedProvider>
  </NavigationContainer>
);
describe('it should render wallet screen', () => {
  it('render Wallet screen', async () => {
    render(component);

    const description = await screen.findByText(
      'Envie somente Bitcoin para este endereço. Enviar qualquer outra moeda pode resultar em perda permanente dos recursos.',
    );
    const trash = await screen.findByText('Excluir');
    const send = await screen.findByText('Enviar');
    const goBackButton = await screen.findByText('Voltar');
    const receivedCoin = await screen.findByText('Receber BTC');
    const copy = await screen.findByText('copiar');
    const walletAdress = await screen.findByText(
      '1GfYUSqAbqGTpp6nnCfvTKUBE5QgEwLQX8',
    );

    expect(receivedCoin).toBeTruthy();
    expect(trash).toBeTruthy();
    expect(send).toBeTruthy();
    expect(walletAdress).toBeTruthy();
    expect(copy).toBeTruthy();
    expect(description).toBeTruthy();
    expect(goBackButton).toBeTruthy();
  });

  it('should goBack to home', async () => {
    render(component);
    const goBackButton = await screen.findByText('Voltar');
    expect(await goBackButton).toBeTruthy();
    fireEvent.press(screen.getByText('Voltar'));
    await waitFor(() => {
      expect(mockedNavigate).toBeCalledWith('Home');
    });
  });
});
