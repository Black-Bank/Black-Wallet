/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import AddIcon from '../../assets/icon-add.svg';
import BTCIcon from '../../assets/icon-btc-wallet.svg';
import ETHIcon from '../../assets/icon-eth-wallet.svg';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {
  CardCountWallet,
  ChartContainer,
  Container,
  ContainerCountAndDistribution,
  ContainerGraphic,
  ContainerText,
  ContainetNotWallet,
  ContentGrapric,
  ContentTextNotWallet,
  NumberCountWallet,
  OverlayComponent,
  TextCountWallet,
  TextGraphic,
  TextNotWallet,
  TextPercentageBTC,
  TextPercentageETH,
  TextTitle,
} from './CardsDistribution.styles';
import {PieChart} from 'react-native-chart-kit';
import {ContentText} from './CardAddAndDelete.styles';
import {IWallet} from '../HomeScreen/interfaces';

export const CardsDistribuition = () => {
  const {data} = useGetWallets();
  const countWalletsBTC = data.getFormatedData?.filter(
    (wallet: IWallet) => wallet.WalletType === 'BTC',
  ).length;
  const countWalletsETH = data.getFormatedData?.filter(
    (wallet: IWallet) => wallet.WalletType === 'ETH',
  ).length;

  const quantidadeTotal = data.getFormatedData?.length;
  const porcentagemBTC =
    quantidadeTotal !== 0
      ? Math.round((countWalletsBTC / quantidadeTotal) * 100)
      : 0;
  const porcentagemETH =
    quantidadeTotal !== 0
      ? Math.round((countWalletsETH / quantidadeTotal) * 100)
      : 0;

  console.log(porcentagemBTC);
  console.log(porcentagemETH);

  const base = [
    {name: 'Ethereum', y: porcentagemETH, color: '#5B95FF'},
    {name: 'Bitcoin', y: porcentagemBTC, color: '#FF7D00'},
  ];

  return (
    <ContainerCountAndDistribution>
      {data.getFormatedData.length > 0 ? (
        <CardCountWallet>
          <TextCountWallet>Você possui</TextCountWallet>
          <NumberCountWallet>{data.getFormatedData.length}</NumberCountWallet>
          <TextCountWallet>
            {data.getFormatedData.length > 1 ? 'Carteiras' : 'Carteira'}
          </TextCountWallet>
        </CardCountWallet>
      ) : (
        <ContentTextNotWallet>
          <TextNotWallet>
            Você ainda não possui uma carteira adicionada
          </TextNotWallet>
          <AddIcon width={35} height={35} />
        </ContentTextNotWallet>
      )}
      {quantidadeTotal !== 0 ? (
        <ContainerGraphic>
          <TextTitle>Distribuição da carteira</TextTitle>
          <PieChartComponent data={base} />
          <TextPercentageBTC>{porcentagemBTC}%</TextPercentageBTC>
          <TextPercentageETH>{porcentagemETH}%</TextPercentageETH>
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
          <TextNotWallet>
            Você ainda não possui uma carteira adicionada
          </TextNotWallet>
          <AddIcon width={35} height={35} style={{marginBottom: 5}} />
        </ContainetNotWallet>
      )}
    </ContainerCountAndDistribution>
  );
};

const PieChartComponent = ({data}: any) => {
  return (
    <Container>
      <ChartContainer>
        <PieChart
          data={data}
          width={100}
          height={100}
          accessor="y"
          hasLegend={false}
          backgroundColor="transparent"
          paddingLeft="15"
          chartConfig={{
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
        <OverlayComponent />
      </ChartContainer>
    </Container>
  );
};
