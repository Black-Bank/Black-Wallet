import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {WALLET_SCREEN} from '../../component/strings/pt-br';
import * as S from '../../component/styles/styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
      return 'Envie somente Bitcoin';
    } else {
      return 'Envie somente Etherum';
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
      <S.WalletCard>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: '#d3d3d3',
            height: 40,
            width: '90%',
            flexDirection: 'row',
            borderRadius: 5,
            justifyContent: 'flex-end',
            alignItems: 'center',
            opacity: 0.8,
          }}>
          <S.AdressTitle selectable={true}>{walletAddress}</S.AdressTitle>
          <View style={{marginLeft: 10, marginRight: 10}}>
            <TouchableOpacity
              onPress={() => Clipboard.setString(walletAddress)}>
              <Text>{WALLET_SCREEN.copy}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 14,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>
            {coinBaseName(coin)} {WALLET_SCREEN.walletDescription}
          </Text>
        </View>
      </S.WalletCard>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <S.GeneralButtonStyles>
          <S.ButtonTitle>Voltar</S.ButtonTitle>
        </S.GeneralButtonStyles>
      </TouchableOpacity>
    </S.WalletCard>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
});
