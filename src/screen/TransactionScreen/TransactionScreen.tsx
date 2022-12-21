/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CoinPrice} from '../../component/services/WebServices';
import * as S from '../../component/styles/styles';
import * as W from '../WalletScreen/styles';
import {WALLET_SCREEN} from '../../component/strings/pt-br';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function TransactionScreen({
  route,
}: {
  route: {
    params: {
      walletAddress: string;
      coin: string;
    };
  };
}) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [actualCoinPrice, setActualCoinPrice] = useState<number>(0);
  const {coin} = route!.params;
  const requestTime = 5000;

  const Monitor = async () => {
    console.log('Monitoring check');
    useEffect(() => {
      try {
        setInterval(
          async () => setActualCoinPrice(Number(await CoinPrice(coin))),
          requestTime,
        );
      } catch (e: any) {
        console.log('call failed, message: ' + e.message);
        Monitor();
      }
    }, []);
  };

  Monitor();

  return (
    <>
      <Text>Transaction Screen {actualCoinPrice}</Text>
      <W.GoBackButtonSpace>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <S.GeneralButtonStyles>
            <S.ButtonTitle>{WALLET_SCREEN.goBack}</S.ButtonTitle>
          </S.GeneralButtonStyles>
        </TouchableOpacity>
      </W.GoBackButtonSpace>
    </>
  );
}
