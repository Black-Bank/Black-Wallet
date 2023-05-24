/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {render} from '@testing-library/react-native';
import {WalletScreen} from '../WalletScreen';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('it should render wallet screen', () => {
  it('render wallet screen', async () => {
    render(
      <NavigationContainer>
        <WalletScreen route={route} />
      </NavigationContainer>,
    );
  });
});

const route = {
  params: {
    walletAddress: '1GfYUSqAbqGTpp6nnCfvTKUBE5QgEwLQX8',
    coin: 'BTC',
    balance: 0.0002,
    privateKey:
      '3fjS0yIU1QUKo16Ve8JNXjd8ouyvZMdbaPP3NxccrBuFebNBlf59rhzjgtiAAAJE4At0XGzoX/F7KMa+67WYgXiEv39vE4SaEnbhAbk7uYY=',
    name: 'Carteira de Criptomoeda',
  },
};
