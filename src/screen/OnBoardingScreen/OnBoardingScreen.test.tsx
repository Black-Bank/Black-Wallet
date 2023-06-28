import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {OnBoardingScreen} from './OnBoardingScreen';

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
      <OnBoardingScreen />
    </MockedProvider>
  </NavigationContainer>
);

describe('it should render OnBoardin Screen', () => {
  it('render Button "Pular"', async () => {
    const {getByText} = render(component);

    await waitFor(async () => {
      expect(getByText('Pular')).toBeTruthy();
    });
  });

  it('Go to login', () => {
    const {getByText} = render(component);
    const buttonGoToLogin = getByText('Pular');

    fireEvent.press(buttonGoToLogin);

    expect(mockedNavigate).toHaveBeenCalledWith('AuthScreen');
  });

  it('should swipe to the next slide', () => {
    const {getByTestId, queryByText} = render(component);
    const swiper = getByTestId('swiper-test');

    fireEvent(swiper, 'onTouchStart', {nativeEvent: {pageX: 200}});
    fireEvent(swiper, 'onTouchEnd', {nativeEvent: {pageX: 100}});

    // Verifica se o próximo slide foi exibido
    const nextSlideText =
      'Descubra a liberdade financeira ao ter controle total sobre seus ativos digitais';
    expect(queryByText(new RegExp(nextSlideText, 'i'))).toBeTruthy();
  });
});
