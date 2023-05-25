import React from 'react';
import {render} from '@testing-library/react-native';
import {WalletScreen} from '../WalletScreen';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('it should render wallet screen', () => {
  it('render wallet screen', async () => {
    const component = (
      <NavigationContainer>
        <WalletScreen route={route} />
      </NavigationContainer>
    );

    const {getByText} = render(component);

    expect(getByText('1GfYUSqAbqGTpp6nnCfvTKUBE5QgEwLQX8')).toBeTruthy();
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
