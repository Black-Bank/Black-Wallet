/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {IWalletData} from '../../screen/HomeScreen/interfaces';

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
  const thisWallet = data?.find(wallet => wallet.address === address);
  const thisBalance = thisWallet?.balance;
  const thisCoinPrice = thisWallet?.coinPrice;

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
          {thisCoinPrice && (
            <ButtonTitle>
              USD {numberFormatter(thisCoinPrice * Number(thisBalance))}
            </ButtonTitle>
          )}
        </CardWalletContainer>
      </CardWallet>
      <BoxCardTitle>
        <CardCoin>
          {thisBalance} {coin}
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
