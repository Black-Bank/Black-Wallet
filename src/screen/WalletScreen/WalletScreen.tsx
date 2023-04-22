import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {WALLET_SCREEN} from '../../component/strings/pt-br';
import * as S from '../../component/styles/styles';
import * as W from './styles';
import {ModalScreen} from './ModalScreen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ECoinType} from '../../component/types/interfaces';

export function WalletScreen({
  route,
}: {
  route?: {
    params: {
      walletAddress: string;
      coin: string;
      privateKey?: string;
      balance: number;
    };
  };
}) {
  const {walletAddress, coin, privateKey, balance} = route!.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const coinBaseName = (coinBase: string): string => {
    if (coinBase === ECoinType.BTC) {
      return WALLET_SCREEN.SendOnlyBTC;
    } else {
      return WALLET_SCREEN.SendOnlyETH;
    }
  };
  const receivedCoin = `${WALLET_SCREEN.received} ${coin}`;
  const description = `${coinBaseName(coin)} ${
    WALLET_SCREEN.walletDescription
  }`;

  return (
    <S.WalletCard>
      <S.HeaderWalletTitle> {receivedCoin}</S.HeaderWalletTitle>
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
      <W.ModalBox>
        <View>
          <ModalScreen
            coin={coin}
            title={WALLET_SCREEN.Trash}
            address={walletAddress}
          />
        </View>
        <View>
          <ModalScreen
            coin={coin}
            title={WALLET_SCREEN.Send}
            address={walletAddress}
            privateKey={privateKey}
            balance={balance}
          />
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
          <Text>{description}</Text>
        </W.DescriptionBox>
      </S.WalletCard>
    </S.WalletCard>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
});
