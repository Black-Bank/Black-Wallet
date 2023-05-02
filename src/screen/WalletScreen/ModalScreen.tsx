/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import * as W from './styles';
import AuthStore from '../AuthScreen/AuthStore';
import {useMutation} from '@apollo/client';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {SEND_CODE_EMAIL, SEND_DELETE_WALLET_EMAIL} from '../../component/client/queries/queries';
import Crypto from '../../component/services/ComunicationSystemsAuth';

export function ModalScreen({
  title,
  address,
}: {
  title: string;
  address: string;
}) {
  const loginInstance = AuthStore.getInstance();
  const email = loginInstance.email;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [code, setCode] = useState<string>('');
  const [sendCode] = useMutation(SEND_DELETE_WALLET_EMAIL);
  const crypto = new Crypto();

  const handleConfirmation = () => {
    navigation.navigate('ConfirmDeleteWallet', {
      email: email,
      code: code,
      address: address,
    });
  };

  const handleSendCode = async () => {
    try {
      const {data} = await sendCode({
        variables: {
          email: email,
        },
      });
      setCode(crypto.decrypt(data.SendDeleteWalletCodeEmail.code));

      Toast.show({
        type: 'success',
        text1: 'Código enviado com sucesso',
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Não foi enviar o código para este email',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  useEffect(() => {
    if (code !== '') {
      setTimeout(handleConfirmation, 2000);
    }
  }, [code]);

  return (
    <>
      <TouchableOpacity onPress={handleSendCode}>
        <W.ModalContent>
          <W.Title>{title}</W.Title>
        </W.ModalContent>
      </TouchableOpacity>
    </>
  );
}
