import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {AuthScreen} from './AuthScreen';
import {MockedProvider} from '@apollo/client/testing';
import {InvalidAuthMock} from './authMocks';

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
    render(component);
    const signInButton = await screen.findByText('Sign In');
    const signUpButton = await screen.findByText('Cadastre-se');
    const screenName = await screen.findByText('Login');

    expect(signInButton).toBeTruthy();
    expect(signUpButton).toBeTruthy();
    expect(screenName).toBeTruthy();
  });
  it('render Sign Up screen', async () => {
    render(component);
    const signUpButton = await screen.findByText('Cadastre-se');

    expect(signUpButton).toBeTruthy();
    fireEvent.press(signUpButton);
    expect(mockedNavigate).toHaveBeenCalledWith('SignUpScreen');
  });
  it('shows error message for invalid email', async () => {
    render(component);

    const emailInput = await screen.findByPlaceholderText('Email');
    fireEvent.changeText(emailInput, 'invalid-email');

    const signInButton = await screen.findByText('Sign In');
    fireEvent.press(signInButton);

    const errorMessage = await screen.findByText(
      'email must be a valid email',
      {},
      {timeout: 500},
    );
    expect(errorMessage).toBeTruthy();
  });
});
