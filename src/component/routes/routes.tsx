import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screen/HomeScreen/home';
import {WalletScreen} from '../../screen/WalletScreen/WalletScreen';
import {TransactionScreen} from '../../screen/TransactionScreen/TransactionScreen';
import {useContext} from 'react';

import {AuthScreen} from '../../screen/AuthScreen/AuthScreen';
import {AuthContext} from '../../contexts/auth';
import {SignupScreen} from '../../screen/SignUpScreen/SignUpScreen';
import {EvoBalance} from '../../screen/EvolutionBalanceScreen/EvoBalance';
import {ForgotScreen} from '../../screen/ForgotScreen/ForgotScreen';
import {ForgotRoutes} from '../../screen/ForgotScreen/ForgotRoutes';
import {AuthRoutes} from '../../screen/AuthScreen/AuthRoutes';

const Stack = createNativeStackNavigator();

export function Routes() {
  const {isAuthenticated} = useContext(AuthContext);
  const optionsStyle = {
    headerStyle: {
      backgroundColor: '#35224b',
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
    headerTransparent: true,
    headerTitle: 'Home',
  };
  const optionsHomeStyle = {
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
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={optionsHomeStyle}
          />
          <Stack.Screen
            name="WalletScren"
            component={WalletScreen}
            options={optionsHomeStyle}
          />
          <Stack.Screen
            name="TransactionScreen"
            component={TransactionScreen}
          />
          <Stack.Screen
            name="EvoScreen"
            component={EvoBalance}
            options={optionsStyle}
          />
        </>
      ) : (
        <Stack.Screen
          name="AuthRoutes"
          options={{headerShown: false}}
          component={AuthRoutes}
        />
      )}
    </Stack.Navigator>
  );
}
