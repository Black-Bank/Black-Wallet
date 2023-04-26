import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from './AuthScreen';
import {SignupScreen} from '../SignUpScreen/SignUpScreen';
import {ForgotScreen} from '../ForgotScreen/ForgotScreen';

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
        options={optionsStyle}
      />
    </Stack.Navigator>
  );
}
