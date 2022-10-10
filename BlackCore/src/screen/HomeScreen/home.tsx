import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_WALLETS} from '../../component/client/queries/queries';
import {RedContainer, Title} from '../../component/styles/styles';
import {View, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Chart} from '../../component/chart/chart';
import config from '../../../config';
import {WalletCard} from '../../component/walletCard/WalletCard';
import {HOME} from '../../component/strings/pt-br';
import {ModalButton} from '../../component/Modal/modalButton/ModalButton';

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
    item: {name: string; address: string; WalletType: string};
  }) => <WalletCard name={item.name} coin={item.WalletType} value={10.72} />;

  return (
    <View style={styles.height}>
      <Chart />

      <RedContainer>
        <Title>{HOME.wallets}</Title>
        <FlatList
          data={DATA}
          renderItem={renderIWalletCard}
          keyExtractor={item => item.address}
        />
        <ModalButton title={HOME.addWallet} />
      </RedContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
});
