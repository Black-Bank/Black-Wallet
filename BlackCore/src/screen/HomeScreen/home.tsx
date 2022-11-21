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
import axios from 'axios';
interface IWallet {
  name: string;
  address: string;
  WalletType: string;
}

export interface IWalletData {
  address: string;
  balance: string;
}

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {isUpdate} = useContext(AuthContext);
  const refetchTime = 500;
  const {data, refetch} = useGetWallets();
  const sochain_network = 'BTC';
  const testnet = config.ETH_MAINNET;
  const web3 = new Web3(testnet);
  const ETHWallets = data?.getWallets.filter(
    (item: {WalletType: string}) => item.WalletType === 'ETH',
  );
  const BTCWallets = data?.getWallets.filter(
    (item: {WalletType: string}) => item.WalletType === 'BTC',
  );
  const [totalBalance, setTotalBalance] = useState(0);
  let walletObjects: IWalletData[] = [];
  const getETHBalance = async (address: string) => {
    let newBalance = await web3.eth.getBalance(address);
    walletObjects.push({address: address, balance: newBalance});
    setTotalBalance(totalBalance + Number(newBalance));
  };

  const getBTCBalance = async (source_address: string) => {
    const sochain_url = `https://sochain.com/api/v2/get_address_balance/${sochain_network}/${source_address}`;
    const response = await axios.get(sochain_url);
    const newBalance = response?.data.data.confirmed_balance;
    walletObjects.push({address: source_address, balance: newBalance});
    setTotalBalance(totalBalance + Number(newBalance));
  };
  const sumBalance = () => {
    ETHWallets?.map((item: {address: string}) => getETHBalance(item.address));
    BTCWallets?.map((item: {address: string}) => getBTCBalance(item.address));
  };
  useEffect(() => {
    sumBalance();
  }, []);

  const renderIWalletCard = ({item}: {item: IWallet}) => (
    <WalletCard
      name={item.name}
      coin={item.WalletType}
      address={item.address}
      data={walletObjects}
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
