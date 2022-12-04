import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {Home} from './home';
import {WalletMock} from './walletMock';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('it should render home screen', () => {
  it('render home screen', async () => {
    const component = (
      <NavigationContainer>
        <MockedProvider mocks={WalletMock}>
          <Home />
        </MockedProvider>
      </NavigationContainer>
    );
    render(component);
    const wallets = await screen.findByText('Carteiras');
    expect(wallets).toBeTruthy();
  });
});
