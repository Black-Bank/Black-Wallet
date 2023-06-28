import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, waitFor} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {SplashScreen} from './SplashScreen';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
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
    <MockedProvider>
      <SplashScreen />
    </MockedProvider>
  </NavigationContainer>
);

describe('it should render Splash Screen', () => {
  it('render Splash Screen', async () => {
    const {getByText} = render(component);

    await waitFor(async () => {
      expect(getByText('Praticidade. Segurança. Transparência.')).toBeTruthy();
    });
  });
});
