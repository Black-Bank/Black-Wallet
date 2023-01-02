/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
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
  let index = 0;
  let limitCall = 60;

  const start = useRef(0);
  const GetCoinPrice = async () => {
    const coinPrice = Number(await CoinPrice(coin));
    return coinPrice;
  };
  const GoHome = () => {
    clearInterval(start.current);
    navigation.navigate('Home');
  };

  const GetCall = () => {
    index++;
    const call = async () => setActualCoinPrice(await GetCoinPrice());
    if (index >= limitCall) {
      clearInterval(start.current);
      navigation.navigate('Home');
    }
    call();
  };

  useEffect(() => {
    start.current = setInterval(() => GetCall(), requestTime);
  }, []);

  return (
    <>
      <Text>
        Transaction Screen
        {actualCoinPrice}
      </Text>
      <W.GoBackButtonSpace>
        <TouchableOpacity onPress={GoHome}>
          <S.GeneralButtonStyles>
            <S.ButtonTitle>{WALLET_SCREEN.goBack}</S.ButtonTitle>
          </S.GeneralButtonStyles>
        </TouchableOpacity>
      </W.GoBackButtonSpace>
    </>
  );
}
