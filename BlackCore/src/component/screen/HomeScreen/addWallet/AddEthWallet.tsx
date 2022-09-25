import {useMutation} from '@apollo/client';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CREAT_ETH_WALLET} from '../../../client/queries/queries';
import {ButtonTitle} from '../../../styles/styles';
<<<<<<< HEAD
import config from '../../../../../config';
=======
>>>>>>> ba39fece7e5be32b639b156d3c252992417bce84

export function AddEthWallet() {
  const [addWallet, {data, loading, error}] = useMutation(CREAT_ETH_WALLET);
  return (
    <TouchableOpacity
      onPress={() =>
        addWallet({
          variables: {
            hashId: 'deg-hjags-123-212asdl',
            name: 'create useMutation',
<<<<<<< HEAD
            key: config.KEY_SECRET_MONGODB,
=======
            key: 'testeJarvis:segura25',
>>>>>>> ba39fece7e5be32b639b156d3c252992417bce84
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
