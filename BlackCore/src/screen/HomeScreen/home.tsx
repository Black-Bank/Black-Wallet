/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import * as S from '../../component/styles/styles';
import {View, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Chart} from '../../component/chart/chart';
import {WalletCard} from '../../component/walletCard/WalletCard';
import {HOME} from '../../component/strings/pt-br';
import {ModalButton} from '../../component/Modal/modalButton/ModalButton';
import {AuthContext} from '../../contexts/auth';
import {useGetWallets} from '../../component/hooks/useGetWallets';

import {IWallet} from './interfaces';

export function Home() {
  const {isUpdate} = useContext(AuthContext);
  const refetchTime = 500;
  const {data, refetch} = useGetWallets();

  const totalBalance = data?.getFormatedData[0].totalBalance;

  const renderIWalletCard = ({item}: {item: IWallet}) => (
    <WalletCard
      name={item.name}
      coin={item.WalletType}
      address={item.address}
      data={data?.getFormatedData}
    />
  );

  useEffect(() => {
    setTimeout(refetch, refetchTime);
  }, [refetch, isUpdate]);
  return (
    <View style={styles.height}>
      <Chart TotalBalance={totalBalance} />
      <S.WalletContainer>
        <S.Title>{HOME.wallets}</S.Title>

        <FlatList
          data={data?.getFormatedData}
          renderItem={renderIWalletCard}
          keyExtractor={item => item.address}
          extraData={isUpdate}
        />

        <ModalButton title={HOME.addWallet} />
      </S.WalletContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
});
