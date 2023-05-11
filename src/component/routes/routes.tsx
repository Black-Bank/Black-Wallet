import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screen/HomeScreen/home';
import {WalletScreen} from '../../screen/WalletScreen/WalletScreen';
import {TransactionScreen} from '../../screen/TransactionScreen/TransactionScreen';
import {useContext} from 'react';

import {AuthContext} from '../../contexts/auth';
import {EvoBalance} from '../../screen/EvolutionBalanceScreen/EvoBalance';
import {AuthRoutes} from '../../screen/AuthScreen/AuthRoutes';
import {ConfirmDeleteWallet} from '../../screen/ConfirmationDeleteWallet/ConfirmationDeleteWallet';
import {CreateWallet} from '../../screen/CreateWalletScreen/CreateWallet';
import {WalletListScreen} from '../../screen/WalletListScreen/WalletListScreen';
import {FutureScreen} from '../../screen/FutureScreen/FutureScreen';
import {WalletButtonRoute} from './WalletRouteButtons';
import {DeleteWallet} from '../../screen/WalletScreen/DeleteWallet';

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
  const optionsWalletStyle = {
    headerStyle: {
      backgroundColor: '#35224b',
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
    headerTransparent: true,
    headerTitle: '',
    headerRight: () => <WalletButtonRoute />,
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
            name="EvoScreen"
            component={EvoBalance}
            options={optionsStyle}
          />
          <Stack.Screen
            name="CreateWallet"
            component={CreateWallet}
            options={optionsHomeStyle}
          />
          <Stack.Screen
            name="DeleteWalletScreen"
            component={DeleteWallet}
            options={optionsHomeStyle}
          />
          <Stack.Screen
            name="WalletScren"
            component={WalletScreen}
            options={optionsWalletStyle}
          />
          <Stack.Screen
            name="TransactionScreen"
            options={optionsHomeStyle}
            component={TransactionScreen}
          />
          <Stack.Screen
            name="ConfirmDeleteWallet"
            component={ConfirmDeleteWallet}
            options={optionsHomeStyle}
          />
          <Stack.Screen
            name="WalletListScreen"
            component={WalletListScreen}
            options={optionsHomeStyle}
          />
          <Stack.Screen
            name="FutureScreen"
            component={FutureScreen}
            options={optionsHomeStyle}
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
