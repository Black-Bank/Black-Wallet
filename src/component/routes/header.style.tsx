import React from 'react';
import {WalletButtonRoute} from './WalletRouteButtons';

export const optionsStyle = {
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
export const optionsWalletStyle = {
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
export const optionsHomeStyle = {
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

export const optionsHomeTransactionStyle = {
  headerStyle: {
    backgroundColor: '#35224b',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTintColor: '#fff',
  headerTransparent: true,
  headerTitle: 'Enviar',
  headerTitleAlign: 'center',
};

export const optionsConfirmTransactionStyle = {
  headerStyle: {
    backgroundColor: '#35224b',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTintColor: '#fff',
  headerTransparent: true,
  headerTitle: 'Confirmar informações',
  headerTitleAlign: 'center',
};
