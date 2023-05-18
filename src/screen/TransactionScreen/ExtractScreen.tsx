import React from 'react';
import {useContext} from 'react';
import {
  BoxItem,
  BoxTitle,
  ButtonCancelText,
  CancelButton,
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
import {useGetCoinPrice} from '../../component/hooks/useGetCoinPrice';
interface ExtractScreenProps {
  route?: {
    params: {
      hash: string;
    };
  };
}
export function ExtractScreen({route}: ExtractScreenProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {transactionData} = useContext(AuthContext);
  const hashString = route!.params.hash;

  const {coinPrice} = useGetCoinPrice(transactionData.coin);
  const truncatedString = hashString.slice(0, 3) + '...' + hashString.slice(-3);
  const dateStrDay = getFormattedDate().slice(0, 11);
  const dateStrHour = getFormattedDate().slice(-11);

  const handleCancel = () => {
    navigation.navigate('Home');
  };
  return (
    <TransactionContainer>
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
            <BoxTitle>Hash da transação</BoxTitle>
            <LogoItemContainer onPress={() => Clipboard.setString(hashString)}>
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
          <CancelButton onPress={handleCancel}>
            <ButtonCancelText>Home</ButtonCancelText>
          </CancelButton>
        </ContinueButtonContainer>
      </>
    </TransactionContainer>
  );
}
