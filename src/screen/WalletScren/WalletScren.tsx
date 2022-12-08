import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {WALLET_SCREEN} from '../../component/strings/pt-br';
import * as S from '../../component/styles/styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as W from './styles';
import {ModalScreen} from './ModalScreen';

export function WalletScren({
  route,
}: {
  route?: {
    params: {
      walletAddress: string;
      coin: string;
      navigation: NativeStackNavigationProp<any>;
    };
  };
}) {
  const {walletAddress, coin, navigation} = route!.params;
  const coinBaseName = (coinBase: string): string => {
    if (coinBase === 'BTC') {
      return WALLET_SCREEN.SendOnlyBTC;
    } else {
      return WALLET_SCREEN.SendOnlyETH;
    }
  };
  const receivedCoin = `${WALLET_SCREEN.received} ${coin}`;
  return (
    <S.WalletCard>
      <S.HeaderWalletTitle> {receivedCoin}</S.HeaderWalletTitle>
      {coin === 'BTC' && (
        <Image
          source={require('../../assets/BTCLogo.png')}
          style={styles.image}
        />
      )}
      {coin === 'ETH' && (
        <Image
          source={require('../../assets/ETHLogo.png')}
          style={styles.image}
        />
      )}
      <W.ModalBox>
        <View>
          <ModalScreen title={WALLET_SCREEN.Trash} />
        </View>
        <View>
          <ModalScreen title={WALLET_SCREEN.Send} />
        </View>
      </W.ModalBox>
      <S.WalletCard>
        <W.AdressBox>
          <S.AdressTitle selectable={true}>{walletAddress}</S.AdressTitle>
          <W.HorizontalSpaceViewDefault>
            <TouchableOpacity
              onPress={() => Clipboard.setString(walletAddress)}>
              <Text>{WALLET_SCREEN.copy}</Text>
            </TouchableOpacity>
          </W.HorizontalSpaceViewDefault>
        </W.AdressBox>
        <W.DescriptionBox>
          <Text>
            {coinBaseName(coin)} {WALLET_SCREEN.walletDescription}
          </Text>
        </W.DescriptionBox>
      </S.WalletCard>
      <W.GoBackButtonSpace>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <S.GeneralButtonStyles>
            <S.ButtonTitle>{WALLET_SCREEN.goBack}</S.ButtonTitle>
          </S.GeneralButtonStyles>
        </TouchableOpacity>
      </W.GoBackButtonSpace>
    </S.WalletCard>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
});
