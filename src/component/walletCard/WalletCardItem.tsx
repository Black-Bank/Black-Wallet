import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
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
import {ECoinType} from '../types/interfaces';

export const WalletCardItem = ({
  name,
  coin,
  address,
  data,
}: {
  name: string;
  coin: string;
  address: string;
  data: IWalletData[];
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const thisWallet = data?.find(wallet => wallet.address === address);
  const thisBalance = thisWallet?.balance;
  const thisCoinPrice = thisWallet?.coinPrice;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('WalletScren', {
          walletAddress: address,
          coin: coin,
          navigation: navigation,
          privateKey: thisWallet?.privateKey,
          balance: thisWallet?.balance,
          name: name,
        })
      }>
      <CardWallet>
        {coin === ECoinType.BTC && (
          <Image
            source={require('../../assets/BTCLogo.png')}
            style={styles.image}
          />
        )}
        {coin === ECoinType.ETH && (
          <Image
            source={require('../../assets/ETHLogo.png')}
            style={styles.image}
          />
        )}

        <CardWalletContainer>
          <ButtonTitle black>{name}</ButtonTitle>
          {thisCoinPrice && (
            <ButtonTitle black>
              US$ {numberFormatter(thisCoinPrice * Number(thisBalance))}
            </ButtonTitle>
          )}
        </CardWalletContainer>
      </CardWallet>
      <BoxCardTitle>
        <CardCoin black>
          {thisBalance} {coin}
        </CardCoin>
      </BoxCardTitle>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 60,
    width: 320,
    marginBottom: 20,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  image: {
    height: 40,
    width: 40,
  },
});
