import React from 'react';
import {useQuery} from '@apollo/client';
import {Text} from 'react-native';
import {GET_WALLETS} from '../../client/queries/queries';

export function Home() {
  const {data} = useQuery(GET_WALLETS);

  return <Text> {data?.getWallets[0].name}</Text>;
}
