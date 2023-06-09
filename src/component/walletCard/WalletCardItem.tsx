import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
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
import {AuthContext} from '../../contexts/auth';

export const WalletCardItem = ({
  name,
  coin,
  address,
}: {
  name: string;
  coin: string;
  address: string;
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {extract, walletList} = useContext(AuthContext);
  const cardWalletsList = walletList?.getFormatedData;
  const cardWalletExtractList = extract?.getExtract;
  const thisWallet = cardWalletsList?.find(
    wallet => wallet.address === address,
  );
  const thisBalance = thisWallet?.balance;
  const thisCoinPrice = thisWallet?.coinPrice;
  const thisExtract = cardWalletExtractList?.filter(
    transaction =>
      transaction.addressFrom.toUpperCase() === address.toUpperCase(),
  );

  const dataSet: number[] = [0];
  let percentage = '';
  let thisExtractFirst = 1;

  if (extract) {
    for (let i = 0; i < 10; i++) {
      const hasExtract = Boolean(thisExtract[i]?.addressFrom);
      if (hasExtract) {
        dataSet.push(Math.abs(thisExtract[i]?.coinValue));
      } else {
        dataSet.push(dataSet[i]);
      }
    }
    const thisExtractLength = Math.abs(Number(dataSet[dataSet.length - 1]));
    thisExtractFirst = Math.abs(Number(dataSet[1]));
    percentage = (
      ((thisExtractLength - thisExtractFirst) /
        (thisExtractFirst ? thisExtractFirst : 1)) *
      100
    ).toFixed(2);
  }

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
