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
import {DeleteWallet} from '../../screen/WalletScreen/DeleteWallet';
import {
  optionsConfirmTransactionStyle,
  optionsHeaderHomeStyle,
  optionsHomeStyle,
  optionsHomeTransactionStyle,
  optionsStyle,
  optionsWalletStyle,
} from './header.style';
import {ConfirmTransaction} from '../../screen/TransactionScreen/ConfirmTransaction';
import {ConfirmTransfer} from '../../screen/ConfirmTransfer/ConfirmTokenTransfer';
import {ExtractScreen} from '../../screen/TransactionScreen/ExtractScreen';

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
            options={optionsHeaderHomeStyle}
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
            name="ExtractScreen"
            options={{...optionsHomeStyle, headerBackVisible: false}}
            component={ExtractScreen}
          />
          <Stack.Screen
            name="TransactionScreen"
            options={optionsHomeTransactionStyle}
            component={TransactionScreen}
          />
          <Stack.Screen
            name="ConfirmTransactionScreen"
            options={optionsConfirmTransactionStyle}
            component={ConfirmTransaction}
          />
          <Stack.Screen
            name="ConfirmDeleteWallet"
            component={ConfirmDeleteWallet}
            options={optionsHomeStyle}
          />
          <Stack.Screen
            name="ConfirmTokenTransaction"
            component={ConfirmTransfer}
            options={optionsHomeStyle}
          />
          <Stack.Screen
            name="WalletListScreen"
            component={WalletListScreen}
            options={{headerShown: false}}
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
