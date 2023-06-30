import React from 'react';
import AddIcon from '../../assets/icon-add.svg';
import BTCIcon from '../../assets/icon-btc-wallet.svg';
import ETHIcon from '../../assets/icon-eth-wallet.svg';
import {
  CardCountWallet,
  ContainerCountAndDistribution,
  ContainerGraphic,
  ContainerText,
  ContainetNotWallet,
  ContentGrapric,
  ContentTextNotWallet,
  NumberCountWallet,
  TextCountWallet,
  TextGraphic,
  TextNotWallet,
  TextPercentageBTC,
  TextPercentageETH,
  TextTitle,
} from './CardsDistribution.styles';

import {IWallet, IWalletData} from '../HomeScreen/interfaces';
import {ButtonCreateWallet} from './CardsDistribution.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PieChartComponent} from '../../component/CircularChart/circularChart';

interface ICard {
  data: {getFormatedData: IWalletData[]};
}
export const CardsDistribuition = ({data}: ICard) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateCreateWallet = () => {
    navigation.navigate('CreateWallet');
  };

  const countWalletsBTCValue = data.getFormatedData
    ?.filter((wallet: IWallet) => wallet.WalletType === 'BTC')
    .reduce(
      (acc: number, wallet: IWallet) => acc + wallet.balance * wallet.coinPrice,
      0,
    );
  const countWalletsETHValue = data.getFormatedData
    ?.filter((wallet: IWallet) => wallet.WalletType === 'ETH')
    .reduce(
      (acc: number, wallet: IWallet) => acc + wallet.balance * wallet.coinPrice,
      0,
    );

  const quantidadeTotal = countWalletsBTCValue + countWalletsETHValue;
  const BTCRate =
    quantidadeTotal !== 0
      ? Math.round((countWalletsBTCValue / quantidadeTotal) * 100)
      : 0;
  const ETHRate =
    quantidadeTotal !== 0
      ? Math.round((countWalletsETHValue / quantidadeTotal) * 100)
      : 0;

  const base = [
    {name: 'Ethereum', y: ETHRate, color: '#5B95FF'},
    {name: 'Bitcoin', y: BTCRate, color: '#FF7D00'},
  ];

  return (
    <ContainerCountAndDistribution>
      {data.getFormatedData?.length > 0 ? (
        <CardCountWallet>
          <TextCountWallet>Você possui</TextCountWallet>
          <NumberCountWallet>{data.getFormatedData?.length}</NumberCountWallet>
          <TextCountWallet>
            {data.getFormatedData?.length > 1 ? 'Carteiras' : 'Carteira'}
          </TextCountWallet>
        </CardCountWallet>
      ) : (
        <ContentTextNotWallet>
          <TextNotWallet>
            Você ainda não possui uma carteira adicionada
          </TextNotWallet>
          <ButtonCreateWallet onPress={() => navigateCreateWallet()}>
            <AddIcon width={35} height={35} />
          </ButtonCreateWallet>
        </ContentTextNotWallet>
      )}
      {quantidadeTotal !== 0 ? (
        <ContainerGraphic>
          <TextTitle>Distribuição da carteira</TextTitle>
          <PieChartComponent data={base} />
          <TextPercentageBTC>{BTCRate}%</TextPercentageBTC>
          <TextPercentageETH>{ETHRate}%</TextPercentageETH>
          <ContentGrapric>
            <ContainerText>
              <BTCIcon width={25} height={25} />
              <TextGraphic>Bitcoin</TextGraphic>
            </ContainerText>

            <ContainerText>
              <ETHIcon width={25} height={25} />
              <TextGraphic>Ethereum</TextGraphic>
            </ContainerText>
          </ContentGrapric>
        </ContainerGraphic>
      ) : (
        <ContainetNotWallet>
          <TextTitle>Distribuição da carteira</TextTitle>
          <TextNotWallet>Você ainda não possui saldo</TextNotWallet>
          <ButtonCreateWallet onPress={() => navigateCreateWallet()}>
            <AddIcon width={35} height={35} />
          </ButtonCreateWallet>
        </ContainetNotWallet>
      )}
    </ContainerCountAndDistribution>
  );
};
