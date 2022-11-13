/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import Web3 from 'web3';
import config from '../../../config';
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
}: {
  name: string;
  coin: string;
  address: string;
}) {
  const testnet = config.ETH_MAINNET;
  const web3 = new Web3(testnet);
  const [balance, setBalance] = useState('00');

  const getETHBalance = async () => {
    if (coin === 'ETH') {
      let newBalance = await web3.eth.getBalance(address);
      setBalance(newBalance);
    }
  };

  getETHBalance();

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
          <ButtonTitle>{numberFormatter(Number(balance))}</ButtonTitle>
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
