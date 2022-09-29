import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {
  ButtonTitle,
  CardTitle,
  CardWallet,
  BoxCardTitle,
  CardWalletContainer,
  CardCoin,
} from '../styles/styles';

export function WalletCard({
  name,
  coin,
  value,
}: {
  name: string;
  coin: string;
  value: number;
}) {
  const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <TouchableOpacity style={styles.card}>
      <CardWallet>
        <Image
          source={require('../../assets/bitcoinLogo.png')}
          style={styles.image}
        />

        <CardWalletContainer>
          <ButtonTitle>{name}</ButtonTitle>
          <ButtonTitle>{numberFormatter.format(value)}</ButtonTitle>
        </CardWalletContainer>
      </CardWallet>
      <BoxCardTitle>
        <CardCoin>
          {value} {coin}
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
