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
import {handleWhatsAppPress} from '../../component/services/wppServices';

export function CardsBuyCryptos() {
  return (
    <ContainerCards>
      <Card
        bgColor="#0661c8"
        onPress={() => handleWhatsAppPress('5521977040408')}>
        <EthereumIcon width={40} height={40} />
        <ContentBuyCoins>
          <TitleContent>Compre Ethereum</TitleContent>
          <DescriptionContent>
            Seu novo caminho para a liberdade financeira
          </DescriptionContent>
        </ContentBuyCoins>
        <RightIcon width={30} height={30} />
      </Card>

      <Card
        bgColor="#de6d00"
        onPress={() => handleWhatsAppPress('5521977040408')}>
        <BitcoinIcon width={40} height={40} />
        <ContentBuyCoins>
          <TitleContent>Compre Bitcoin</TitleContent>
          <DescriptionContent>
            Seu novo caminho para a liberdade financeira
          </DescriptionContent>
        </ContentBuyCoins>
        <RightIcon width={30} height={30} />
      </Card>
    </ContainerCards>
  );
}
