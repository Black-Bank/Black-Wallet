import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {Home} from './home';
import {WalletMock} from './walletMock';

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
  });
});
