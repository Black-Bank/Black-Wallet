/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {WALLET_SCREEN} from '../../component/strings/pt-br';
import * as S from '../../component/styles/styles';
import * as W from './styles';
import {ECoinType} from '../../component/types/interfaces';
import BTCLogo from '../../assets/bitcoin.svg';
import ETHLogo from '../../assets/ethereum.svg';
import {AuthContext} from '../../contexts/auth';
export function WalletScreen({
  route,
}: {
  route?: {
    params: {
      walletAddress: string;
      coin: string;
      privateKey: string;
      balance: number;
      name: string;
    };
  };
}) {
  const {walletAddress, coin, privateKey, balance, name} = route!.params;
  const {setWalletData} = useContext(AuthContext);
  useEffect(() => {
    setWalletData({
      address: walletAddress,
      name: name,
      privateKey: privateKey,
      balance: balance,
      coin: coin,
    });
  }, []);
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
    <>
      <S.WalletCard>
        <S.HeaderWalletTitle> {receivedCoin}</S.HeaderWalletTitle>
        {coin === ECoinType.BTC && <BTCLogo width={300} height={300} />}
        {coin === ECoinType.ETH && <ETHLogo width={300} height={300} />}
        <S.ContentCard>
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
        </S.ContentCard>
      </S.WalletCard>
    </>
  );
}
