import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screen/HomeScreen/home';
import {WalletScren} from '../../screen/WalletScren/WalletScren';
import {Header} from '../header/header';
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
        component={WalletScren}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
}
