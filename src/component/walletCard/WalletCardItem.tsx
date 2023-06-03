import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IWalletData} from '../../screen/HomeScreen/interfaces';
import {ButtonTitle, CardWallet} from '../styles/styles';
import {numberFormatter} from '../utils/functions/Format';
import {ECoinType} from '../types/interfaces';
import {
  ContainerHeaderCard,
  ContainerWalletName,
  FooterCardWallet,
  SubtitleCard,
  TitleCard,
  TouchableOpacityStyled,
} from './walletCardItem.style';
import IconEth from '../../assets/icon-eth-wallet.svg';
import IconBtc from '../../assets/icon-btc-wallet.svg';
import {Text} from 'react-native';

export const WalletCardItem = ({
  name,
  coin,
  address,
  data,
}: {
  name: string;
  coin: string;
  address: string;
  data: IWalletData[];
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const thisWallet = data?.find(wallet => wallet.address === address);
  const thisBalance = thisWallet?.balance;
  const thisCoinPrice = thisWallet?.coinPrice;

  return (
    <TouchableOpacityStyled
      onPress={() =>
        navigation.navigate('WalletScren', {
          walletAddress: address,
          coin: coin,
          navigation: navigation,
          privateKey: thisWallet?.privateKey,
          balance: thisWallet?.balance,
          name: name,
        })
      }>
      <CardWallet>
        <ContainerHeaderCard>
          {coin === ECoinType.BTC && <IconBtc />}
          {coin === ECoinType.ETH && <IconEth />}
          <ContainerWalletName>
            <TitleCard>{name}</TitleCard>
            <SubtitleCard>
              {/* {thisBalance}  */}
              0.0006436 {coin}
            </SubtitleCard>
          </ContainerWalletName>
        </ContainerHeaderCard>
        <FooterCardWallet>
          {thisCoinPrice && (
            <ButtonTitle black>
              US$ {numberFormatter(thisCoinPrice * Number(thisBalance))}
            </ButtonTitle>
          )}
          <Text>7.40%</Text>
        </FooterCardWallet>
      </CardWallet>
    </TouchableOpacityStyled>
  );
};
