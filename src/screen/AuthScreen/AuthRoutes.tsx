import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from './AuthScreen';
import {SignupScreen} from '../SignUpScreen/SignUpScreen';
import {ForgotScreen} from '../ForgotScreen/ForgotScreen';
import {ConfirmCodeScreen} from '../Confirmation/Confirmation';
import {UpdatePassScreen} from '../UpdatePass/UpdatePassScreen';
import {ConfirmSignUpScreen} from '../SignUpScreen/ConfirmSignUp';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  const optionsStyle = {
    headerStyle: {
      backgroundColor: '#35224b',
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
    headerTransparent: true,
    headerTitle: '',
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          headerStyle: {
            backgroundColor: '#35224b',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
          headerTransparent: true,
          headerTitle: 'Black',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="SignUpScreen"
        component={SignupScreen}
        options={{
          headerStyle: {
            backgroundColor: '#35224b',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
          headerTransparent: true,
          headerTitle: 'Login',
        }}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{
          headerStyle: {
            backgroundColor: '#ffff',
          },
          headerTitleStyle: {
            color: '#414561',
          },
          headerTintColor: '#828282',
          headerTransparent: true,
          headerTitle: 'Esqueceu a senha?',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ConfirmationScreen"
        component={ConfirmCodeScreen}
        options={optionsStyle}
      />
      <Stack.Screen
        name="ConfirmationSignUpScreen"
        component={ConfirmSignUpScreen}
        options={optionsStyle}
      />
      <Stack.Screen
        name="UpdatePassScreen"
        component={UpdatePassScreen}
        options={optionsStyle}
      />
    </Stack.Navigator>
  );
}
