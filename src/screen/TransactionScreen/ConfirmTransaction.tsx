/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useContext} from 'react';
import {
  BoxItem,
  BoxTitle,
  ButtonCancelText,
  ButtonContinueText,
  CancelButton,
  ContinueButton,
  ContinueButtonContainer,
  DateContainer,
  InfoBox,
  LogoItem,
  LogoItemContainer,
  TitleContainerHours,
  TransactionContainer,
  USDBoxTitle,
} from './Transaction.style';
import {AuthContext} from '../../contexts/auth';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ECoinType} from '../../component/types/interfaces';
import BTCIcon from '../../assets/BitcoinLogo.svg';
import ETHIcon from '../../assets/ETHTransaction.svg';
import CopyIcon from '../../assets/Copy.svg';
import Clipboard from '@react-native-clipboard/clipboard';
import {getFormattedDate} from '../../component/utils/functions/GetFormatedDate';
import {GetCoinPrice} from './GetCoinPrice';
import {useMutation} from '@apollo/client';
import {SEND_TRANSFER_CODE_EMAIL} from '../../component/client/queries/queries';
import AuthStore from '../AuthScreen/AuthStore';
import Crypto from '../../component/services/ComunicationSystemsAuth';
import Toast from 'react-native-toast-message';
import {ActivityIndicator} from 'react-native-paper';

export function ConfirmTransaction() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {transactionData} = useContext(AuthContext);
  const [code, setCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [SendCode] = useMutation(SEND_TRANSFER_CODE_EMAIL);
  const addressTo = transactionData.addressTo;
  const [coinPrice, setCoinPrice] = useState(0);
  const truncatedString = addressTo.slice(0, 3) + '...' + addressTo.slice(-3);
  const dateStrDay = getFormattedDate().slice(0, 11);
  const dateStrHour = getFormattedDate().slice(-11);
  const loginInstance = AuthStore.getInstance();
  const crypto = new Crypto();
  const Email = loginInstance.email;

  const handleSendCode = async () => {
    setIsLoading(true);
    try {
      const {data} = await SendCode({
        variables: {
          email: Email,
        },
      });
      setCode(crypto.decrypt(data.SendTransferCodeEmail.code));

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
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const Set = async () =>
      setCoinPrice(await GetCoinPrice(transactionData.coin));
    Set();
  }, []);

  const handleContinue = () => {
    handleSendCode();
  };
  const handleCancel = () => {
    navigation.goBack();
  };
  return (
    <TransactionContainer>
      {!isLoading ? (
        <>
          <InfoBox>
            <BoxItem>
              <BoxTitle>Origem</BoxTitle>
              <LogoItemContainer>
                <LogoItem>
                  {transactionData.coin === ECoinType.BTC ? (
                    <BTCIcon width={35} height={35} />
                  ) : (
                    <ETHIcon width={60} height={60} />
                  )}
                </LogoItem>
                <BoxTitle>{transactionData.name}</BoxTitle>
              </LogoItemContainer>
            </BoxItem>
            <BoxItem>
              <BoxTitle>Enviado para</BoxTitle>
              <LogoItemContainer onPress={() => Clipboard.setString(addressTo)}>
                <CopyIcon width={25} height={25} />
                <BoxTitle>{truncatedString}</BoxTitle>
              </LogoItemContainer>
            </BoxItem>
            <BoxItem>
              <TitleContainerHours>
                <BoxTitle>Horário da</BoxTitle>
                <BoxTitle>Transação</BoxTitle>
              </TitleContainerHours>

              <DateContainer>
                <BoxTitle>{dateStrDay}</BoxTitle>
                <BoxTitle>{dateStrHour}</BoxTitle>
              </DateContainer>
            </BoxItem>
            <BoxItem>
              <BoxTitle>Quantidade</BoxTitle>

              <DateContainer>
                <USDBoxTitle>
                  {(transactionData.value * coinPrice).toFixed(2)} USD
                </USDBoxTitle>
                <BoxTitle>
                  {transactionData.value} {transactionData.coin}
                </BoxTitle>
              </DateContainer>
            </BoxItem>
          </InfoBox>
          <ContinueButtonContainer>
            <ContinueButton onPress={handleContinue}>
              <ButtonContinueText>Continuar</ButtonContinueText>
            </ContinueButton>
            <CancelButton onPress={handleCancel}>
              <ButtonCancelText>Cancelar</ButtonCancelText>
            </CancelButton>
          </ContinueButtonContainer>
        </>
      ) : (
        <>
          <ActivityIndicator />
        </>
      )}
    </TransactionContainer>
  );
}