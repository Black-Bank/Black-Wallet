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
      backgroundColor: '#ffff',
    },
    headerTitleStyle: {
      color: '#414561',
    },
    headerTintColor: '#828282',
    headerTransparent: true,
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
          ...optionsStyle,
          headerTitle: 'Cadastre-se',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{
          ...optionsStyle,
          headerTitle: 'Esqueceu a senha?',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ConfirmationScreen"
        component={ConfirmCodeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#ffff',
          },
          headerTitleStyle: {
            color: '#414561',
          },
          headerTintColor: '#828282',
          headerTransparent: true,
          headerTitle: 'Verifique seu E-mail',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ConfirmationSignUpScreen"
        component={ConfirmSignUpScreen}
        options={{
          ...optionsStyle,
          headerTitle: 'Verifique seu E-mail',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="UpdatePassScreen"
        component={UpdatePassScreen}
        options={{
          ...optionsStyle,
          headerTitle: 'Redefina sua senha',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
