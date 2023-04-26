import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import {WalletScreen} from './WalletScreen';
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
      <WalletScreen route={mockRoute} />
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
  });

  it('should display modal', async () => {
    render(component);
    const sendButton = await screen.findByText('Enviar');

    expect(await sendButton).toBeTruthy();
    fireEvent.press(screen.getByText('Enviar'));
    await waitFor(() => {
      expect(screen.getByTestId('addressWalletInput')).toBeTruthy();
    });
  });

  it('should display modal empty text Error', async () => {
    render(component);
    const sendButton = await screen.findByText('Enviar');

    expect(await sendButton).toBeTruthy();
    fireEvent.press(screen.getByText('Enviar'));
    await waitFor(() => {
      expect(screen.getByTestId('addressWalletInput')).toBeTruthy();
    });

    fireEvent.changeText(screen.getByTestId('addressWalletInput'), '');
    await waitFor(async () => {
      expect(
        await screen.findByText('O endereço de destino está vazio.'),
      ).toBeTruthy();
    });
  });
});
