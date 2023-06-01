import React from 'react';
import {
  Card,
  ContainerCards,
  ContentBuyCoins,
  DescriptionContent,
  TitleContent,
} from './CardsBuyCryptos.style';
import EthereumIcon from '../../assets/coinEthereum.svg';
import BitcoinIcon from '../../assets/coinBitcoin.svg';
import RightIcon from '../../assets/rightButton.svg';

export function CardsBuyCryptos() {
  return (
    <ContainerCards>
      <Card bgColor="#0661c8">
        <EthereumIcon width={40} height={40} style={{marginBottom: 10}} />
        <ContentBuyCoins>
          <TitleContent>Compre Ethereum</TitleContent>
          <DescriptionContent>
            Your new way for all familiar payments
          </DescriptionContent>
        </ContentBuyCoins>
        <RightIcon width={30} height={30} />
      </Card>

      <Card bgColor="#de6d00">
        <BitcoinIcon width={40} height={40} style={{marginBottom: 10}} />
        <ContentBuyCoins>
          <TitleContent>Compre Bitcoin</TitleContent>
          <DescriptionContent>
            Your new way for all familiar payments
          </DescriptionContent>
        </ContentBuyCoins>
        <RightIcon width={30} height={30} />
      </Card>
    </ContainerCards>
  );
}
