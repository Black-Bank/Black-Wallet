import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screen/HomeScreen/home';
import {WalletScreen} from '../../screen/WalletScreen/WalletScreen';
import {Header} from '../header/header';
import {TransactionScreen} from '../../screen/TransactionScreen/TransactionScreen';
import {useContext} from 'react';

import {AuthScreen} from '../../screen/AuthScreen/AuthScreen';
import {AuthContext} from '../../contexts/auth';
import {SignupScreen} from '../../screen/SignUpScreen/SignUpScreen';
const Stack = createNativeStackNavigator();

export function Routes() {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="WalletScren"
            component={WalletScreen}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="TransactionScreen"
            component={TransactionScreen}
            options={{
              header: () => <Header />,
            }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>
  );
}
