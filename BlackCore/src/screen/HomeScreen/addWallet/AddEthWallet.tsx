import {useMutation} from '@apollo/client';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CREAT_ETH_WALLET} from '../../../component/client/queries/queries';
import {ButtonTitle} from '../../../component/styles/styles';
import config from '../../../../config';

export function AddEthWallet() {
  const [addWallet, {data, loading, error}] = useMutation(CREAT_ETH_WALLET);
  return (
    <TouchableOpacity
      onPress={() =>
        addWallet({
          variables: {
            hashId: 'deg-hjags-123-212asdl',
            name: 'create useMutation',
            key: config.KEY_SECRET_MONGODB,
          },
        })
      }
      style={styles.Button}>
      <ButtonTitle>Add ETH Wallet</ButtonTitle>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    height: 35,
    width: 80,
    justifyContent: 'center',
    backgroundColor: '#3c0f69',
    borderRadius: 10,
    color: 'polevioletred',
    margin: 1,
  },
});