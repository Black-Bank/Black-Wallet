/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
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
import Web3 from 'web3';
import config from '../../../config';
interface IWallet {
  name: string;
  address: string;
  WalletType: string;
}

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {isUpdate} = useContext(AuthContext);
  const refetchTime = 500;
  const {data, refetch} = useGetWallets();
  const testnet = config.ETH_MAINNET;
  const web3 = new Web3(testnet);
  const ETHWallets = data?.getWallets.filter(
    (item: {WalletType: string}) => item.WalletType === 'ETH',
  );
  const [totalBalance, setTotalBalance] = useState(0);
  const getETHBalance = async (address: string) => {
    let newBalance = await web3.eth.getBalance(address);
    setTotalBalance(totalBalance + Number(newBalance));
  };

  const sumBalance = () => {
    ETHWallets?.map((item: {address: string}) => getETHBalance(item.address));
  };
  useEffect(() => {
    sumBalance();
  }, []);

  const renderIWalletCard = ({item}: {item: IWallet}) => (
    <WalletCard
      name={item.name}
      coin={item.WalletType}
      address={item.address}
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
          data={data?.getWallets}
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
