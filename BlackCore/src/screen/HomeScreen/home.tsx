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
import {useGetPrice} from '../../component/hooks/useGetBTCPrice';

interface IWallet {
  name: string;
  address: string;
  WalletType: string;
}

export interface IWalletData {
  address: string;
  balance: string;
  price: number;
}

function GetBTCPrice(): number {
  const {result} = useGetPrice('BTC');
  return result;
}
function GetETHPrice(): number {
  const {result} = useGetPrice('ETH');
  return result;
}
export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {isUpdate, setIsUpdate} = useContext(AuthContext);
  const refetchTime = 500;
  const {data, refetch} = useGetWallets();
  const BTCPrice = GetBTCPrice();
  const ETHPrice = GetETHPrice();
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
  const [BTCBalance, setBTCBalance] = useState(0);
  const [ETHBalance, setETHBalance] = useState(0);
  let [walletObjects, setWalletObjects] = useState<IWalletData[]>([]);
  const GetETHBalance = async (address: string) => {
    let newBalance = await web3.eth.getBalance(address);
    let dataArray: any = [];
    setETHBalance(Number(newBalance) * ETHPrice);
    dataArray.push(...walletObjects, {
      address: address,
      balance: newBalance,
      price: ETHPrice,
    });
    setWalletObjects(dataArray);
  };
  const GetBTCBalance = async (source_address: string) => {
    const sochain_url = `https://sochain.com/api/v2/get_address_balance/${sochain_network}/${source_address}`;
    const response = await axios.get(sochain_url);
    const newBalance = response?.data.data.confirmed_balance;
    let dataArray: any = [];

    setBTCBalance(BTCPrice * Number(newBalance));
    dataArray.push(...walletObjects, {
      address: source_address,
      balance: newBalance,
      price: BTCPrice,
    });

    setWalletObjects(dataArray);
  };
  const sumBalance = () => {
    if (BTCPrice && ETHPrice) {
      ETHWallets?.map((item: {address: string}) => GetETHBalance(item.address));
      BTCWallets?.map((item: {address: string}) => GetBTCBalance(item.address));
    }
  };
  useEffect(() => {
    sumBalance();
    setTotalBalance(ETHBalance + BTCBalance);
  }, [ETHBalance, BTCBalance, BTCPrice, ETHPrice]);

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
  }, [refetch, isUpdate, BTCPrice, ETHPrice]);

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
