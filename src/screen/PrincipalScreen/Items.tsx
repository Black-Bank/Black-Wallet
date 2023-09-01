import React from 'react';
import SendIcon from '../../assets/send.svg';
import AddIcon from '../../assets/add.svg';
import {IMenuItem} from './types';

export const menuItems: IMenuItem[] = [
  {
    icon: <SendIcon width={25} height={30} fill="#212121" />,
    name: 'Investir',
    screen: 'Home',
  },

  {
    icon: <AddIcon width={20} height={30} fill="#212121" />,
    name: 'Nova Carteira',
    screen: 'CreateWallet',
  },
];
