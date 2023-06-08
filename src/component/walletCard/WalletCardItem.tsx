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
  TextPercentage,
  TitleCard,
  TouchableOpacityStyled,
} from './walletCardItem.style';
import IconEth from '../../assets/icon-eth-wallet.svg';
import IconBtc from '../../assets/icon-btc-wallet.svg';
import {Graphic} from './Graphic';
import {ITypeExtract} from '../transactionList/type';

export const WalletCardItem = ({
  name,
  coin,
  address,
  data,
  extract,
}: {
  name: string;
  coin: string;
  address: string;
  data: IWalletData[];
  extract: ITypeExtract[];
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const thisWallet = data?.find(wallet => wallet.address === address);
  const thisBalance = thisWallet?.balance;
  const thisCoinPrice = thisWallet?.coinPrice;
  const thisExtract = extract?.filter(
    transaction =>
      transaction.addressFrom.toUpperCase() === address.toUpperCase(),
  );

  const dataSet: number[] = [0];

  for (let i = 0; i < 10; i++) {
    const hasExtract = Boolean(thisExtract[i]?.addressFrom);
    if (hasExtract) {
      dataSet.push(Math.abs(thisExtract[i]?.coinValue));
    } else {
      dataSet.push(dataSet[i]);
    }
  }
  const thisExtractLength = Math.abs(Number(dataSet[dataSet.length - 1]));
  const thisExtractFirst = Math.abs(Number(dataSet[1]));
  const percentage = (
    ((thisExtractLength - thisExtractFirst) /
      (thisExtractFirst ? thisExtractFirst : 1)) *
    100
  ).toFixed(2);

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
              {thisBalance}
              {coin}
            </SubtitleCard>
          </ContainerWalletName>
        </ContainerHeaderCard>
        <Graphic dataSet={dataSet} />
        <FooterCardWallet>
          {thisCoinPrice && (
            <ButtonTitle black>
              US$ {numberFormatter(thisCoinPrice * Number(thisBalance))}
            </ButtonTitle>
          )}
          <TextPercentage percentage={percentage}>
            {thisExtractFirst !== 0 ? percentage : 0}%
          </TextPercentage>
        </FooterCardWallet>
      </CardWallet>
    </TouchableOpacityStyled>
  );
};
