import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {
  ButtonTitle,
  CardTitle,
  CardWallet,
  BoxCardTitle,
  CardWalletContainer,
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
  return (
    <TouchableOpacity style={styles.card}>
      <CardWallet>
        <Image
          source={require('../../assets/bitcoinLogo.png')}
          style={styles.image}
        />

        <CardWalletContainer>
          <ButtonTitle>{coin}</ButtonTitle>
          <ButtonTitle>${value}.00</ButtonTitle>
        </CardWalletContainer>
      </CardWallet>
      <BoxCardTitle>
        <CardTitle>{name}</CardTitle>
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
