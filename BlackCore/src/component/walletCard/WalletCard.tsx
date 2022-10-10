import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
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
  value,
}: {
  name: string;
  coin: string;
  value: number;
}) {
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
          <ButtonTitle>{numberFormatter(value)}</ButtonTitle>
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
