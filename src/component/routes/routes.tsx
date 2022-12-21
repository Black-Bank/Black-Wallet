import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screen/HomeScreen/home';
import {WalletScreen} from '../../screen/WalletScreen/WalletScreen';
import {Header} from '../header/header';
import {TransactionScreen} from '../../screen/TransactionScreen/TransactionScreen';
const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
