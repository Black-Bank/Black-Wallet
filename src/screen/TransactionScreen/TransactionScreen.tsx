/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
<<<<<<< HEAD
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
=======
import {Text, TouchableOpacity} from 'react-native';
import {CoinPrice} from '../../component/services/WebServices';
>>>>>>> e93181d13e813362615e124b26f53d8f0f23f408
import * as S from '../../component/styles/styles';
import * as W from '../WalletScreen/styles';
import {WALLET_SCREEN} from '../../component/strings/pt-br';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useMutation} from '@apollo/client';
import {CREAT_TRANSACTION_WALLET} from '../../component/client/queries/queries';
import {GetCoinPrice} from './GetCoinPrice';

export function TransactionScreen({
  route,
}: {
  route: {
    params: {
      walletAddressTo: string;
      walletAddressFrom: string;
      privateKey: string;
      coin: string;
    };
  };
}) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [actualCoinPrice, setActualCoinPrice] = useState<number>(0);
<<<<<<< HEAD
  const [sendAmount, setSendAmount] = useState<string>('');
  const [makeTransaction] = useMutation(CREAT_TRANSACTION_WALLET);

  const {coin, walletAddressTo, walletAddressFrom, privateKey} = route!.params;
=======

  const {coin} = route!.params;
>>>>>>> e93181d13e813362615e124b26f53d8f0f23f408
  const requestTime = 5000;
  let index = 0;
  let limitCall = 60;

  const start = useRef(0);
<<<<<<< HEAD

  useEffect(() => {
    const Set = async () => setActualCoinPrice(await GetCoinPrice(coin));
    Set();
  }, []);

  const GoHome = () => {
    clearInterval(start.current);
    navigation.navigate('Home');
  };
  const sendCripto = () => {
    makeTransaction({
      variables: {
        value: sendAmount,
        addressTo: walletAddressTo,
        privateKey: privateKey,
        addressFrom: walletAddressFrom,
        coin: coin,
      },
    })
      .then(res => console.log(res))
      .catch(err => console.log(err.message));
  };
  const ManyDollars = () => {
    const US = Number(sendAmount) * actualCoinPrice;
    return US.toFixed(2);
  };

  const GetCall = () => {
    index++;
    const call = async () => setActualCoinPrice(await GetCoinPrice(coin));
    if (index >= limitCall) {
      GoHome();
    }
    call();
  };
=======
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
      GoHome();
    }
    call();
  };

  useEffect(() => {
    start.current = Number(setInterval(() => GetCall(), requestTime));
  }, []);
>>>>>>> e93181d13e813362615e124b26f53d8f0f23f408

  useEffect(() => {
    start.current = Number(setInterval(() => GetCall(), requestTime));
  }, []);
  return (
    <>
<<<<<<< HEAD
      <S.SendCard>
        <S.SendAlert>{WALLET_SCREEN.walletAlert}</S.SendAlert>
        <S.SendCoin>U$ {ManyDollars()}</S.SendCoin>
      </S.SendCard>
      <S.WalletCard>
        <S.WalletCard>
          <TextInput
            style={styles.input}
            placeholder={WALLET_SCREEN.qtdCoin}
            testID={'valueInput'}
            keyboardType="numeric"
            value={sendAmount}
            onChangeText={amount => setSendAmount(amount)}
            maxLength={10}
          />
          <W.GoBackButtonSpace>
            <TouchableOpacity onPress={sendCripto}>
              <S.GeneralButtonStyles>
                <S.ButtonTitle>{WALLET_SCREEN.Send}</S.ButtonTitle>
              </S.GeneralButtonStyles>
            </TouchableOpacity>
          </W.GoBackButtonSpace>
        </S.WalletCard>
        <W.GoBackButtonSpace>
          <TouchableOpacity onPress={GoHome}>
            <S.GeneralButtonStyles>
              <S.ButtonTitle>{WALLET_SCREEN.goBack}</S.ButtonTitle>
            </S.GeneralButtonStyles>
          </TouchableOpacity>
        </W.GoBackButtonSpace>
      </S.WalletCard>
=======
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
>>>>>>> e93181d13e813362615e124b26f53d8f0f23f408
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    borderColor: '#121212',
    borderBottomWidth: 2,
    fontSize: 20,
    color: '#121212',
    fontWeight: 'bold',
  },
});
