import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {AuthScreen} from './AuthScreen';
import {MockedProvider} from '@apollo/client/testing';

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
      <AuthScreen />
    </MockedProvider>
  </NavigationContainer>
);

describe('it should render home screen', () => {
  it('render Auth screen', async () => {
    const {getByText} = render(component);

    await waitFor(async () => {
      expect(getByText('Email')).toBeTruthy();
      expect(getByText('Senha')).toBeTruthy();
      expect(getByText('Esqueceu a senha?')).toBeTruthy();
      expect(getByText('Entrar')).toBeTruthy();
      expect(getByText('Cadastre-se')).toBeTruthy();
    });
  });
  it('render Sign Up screen', async () => {
    const {getByText} = render(component);
    const signUpButton = getByText('Cadastre-se');

    expect(signUpButton).toBeTruthy();
    fireEvent.press(signUpButton);
    expect(mockedNavigate).toHaveBeenCalledWith('SignUpScreen');
  });
  it('render Forgot Pasword scren', async () => {
    const {getByText} = render(component);

    const forgotButton = getByText('Esqueceu a senha?');
    expect(forgotButton).toBeTruthy();
    fireEvent.press(forgotButton);
    expect(mockedNavigate).toHaveBeenCalledWith('ForgotScreen');
  });
});
