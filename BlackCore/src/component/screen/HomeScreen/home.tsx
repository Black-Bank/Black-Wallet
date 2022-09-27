import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_WALLETS} from '../../client/queries/queries';
import {RedContainer, Title} from '../../styles/styles';
import {Button, View, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Chart} from '../../chart/chart';
import {AddEthWallet} from './addWallet/AddEthWallet';
import config from '../../../../config';
import {WalletCard} from '../../walletCard/WalletCard';

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {data, loading, error} = useQuery(GET_WALLETS, {
    variables: {
      hashId: 'deg-hjags-123-212asdl',
      key: config.KEY_SECRET_MONGODB,
    },
  });
  const DATA = data?.getWallets;

  const renderIWalletCard = ({
    item,
  }: {
    item: {name: string; address: string};
  }) => <WalletCard name={item.name} coin={'ETH'} value={10} />;

  return (
    <View style={styles.height}>
      <Chart />

      <RedContainer>
        <Title>Carteiras</Title>
        <FlatList
          data={DATA}
          renderItem={renderIWalletCard}
          keyExtractor={item => item.address}
        />
        <AddEthWallet />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </RedContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
});
