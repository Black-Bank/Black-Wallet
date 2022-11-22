/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

import {IWalletData} from '../../screen/HomeScreen/home';
import {
  ButtonTitle,
  CardWallet,
  BoxCardTitle,
  CardWalletContainer,
  CardCoin,
} from '../styles/styles';
import {numberFormatter} from '../utils/functions/Format';
export function WalletCard({
  name,
  coin,
  address,
  data,
}: {
  name: string;
  coin: string;
  address: string;
  data: IWalletData[];
}) {
  const [balance, setBalance] = useState('00');
  const [currentPrice, setCurrentPrice] = useState(0);
  const getBalance = async () => {
    const wallet = data.filter(
      (item: IWalletData) => item.address === address,
    )[0];
    setCurrentPrice(wallet.price);
    setBalance(wallet.balance);
  };

  useEffect(() => {
    getBalance();
  }, [data]);
  return (
    <TouchableOpacity style={styles.card}>
      <CardWallet>
        {coin === 'BTC' && (
          <Image
            source={require(`../../assets/BTCLogo.png`)}
            style={styles.image}
          />
        )}
        {coin === 'ETH' && (
          <Image
            source={require(`../../assets/ETHLogo.png`)}
            style={styles.image}
          />
        )}

        <CardWalletContainer>
          <ButtonTitle>{name}</ButtonTitle>
          <ButtonTitle>
            USD {numberFormatter(currentPrice * Number(balance))}
          </ButtonTitle>
        </CardWalletContainer>
      </CardWallet>
      <BoxCardTitle>
        <CardCoin>
          {balance} {coin}
        </CardCoin>
      </BoxCardTitle>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 60,
    width: 320,
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop: 5,
  },
  image: {
    height: 40,
    width: 40,
  },
});
