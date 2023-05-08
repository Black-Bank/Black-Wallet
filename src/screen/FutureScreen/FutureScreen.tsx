import React, {useState} from 'react';
import {
  Container,
  FutureTotalContainer,
  TextContainer,
  Title,
  TotalText,
  DescText,
  MoreButton,
} from './future.style';
import {FutureCardItem} from './FutureCardItem';
import {IUnconfirmedWallet, IWalletType} from './types';
import {FlatList} from 'react-native';
import {numberFormatter} from '../../component/utils/functions/Format';
import BankIcon from '../../assets/bank.svg';
import ArrowUpIcon from '../../assets/Arrow.svg';
import ArrowDownIcon from '../../assets/ArrowDown.svg';

export function FutureScreen({route}: IUnconfirmedWallet) {
  const wallets = route.params;
  const btcWallets = wallets.filter(wallet => wallet.WalletType === 'BTC');
  const btcPrice = btcWallets[0].coinPrice;
  const convertBTCFactor = 100000000;
  const SatoshisToDollar = btcPrice / convertBTCFactor;
  const [showDesc, setShowDesc] = useState<boolean>(false);

  const renderItem = ({item}: {item: IWalletType}) => {
    return (
      <FutureCardItem
        name={item.name}
        value={item.unconfirmedBalance * SatoshisToDollar}
        walletType={item.WalletType}
      />
    );
  };

  const totalUnconfirmedBTCBalance =
    btcWallets.reduce((total, wallet) => total + wallet.unconfirmedBalance, 0) *
    SatoshisToDollar;

  const isGain = Boolean(totalUnconfirmedBTCBalance >= 0);
  //ArrowUpIcon
  return (
    <Container>
      <Title>Lançamentos Futuros</Title>
      <FutureTotalContainer>
        <BankIcon width={24} height={24} fill="white" />
        <TextContainer>
          <TotalText value={isGain}>
            {isGain
              ? numberFormatter(totalUnconfirmedBTCBalance)
              : -numberFormatter(totalUnconfirmedBTCBalance)}{' '}
            USD
          </TotalText>
          <MoreButton onPress={() => setShowDesc(!showDesc)}>
            {showDesc ? (
              <ArrowUpIcon width={24} height={24} fill="#000" />
            ) : (
              <ArrowDownIcon width={24} height={24} fill="#000" />
            )}
          </MoreButton>
          {showDesc && (
            <DescText>
              Esse será o valor {isGain ? 'depositado' : 'debitado'} da sua
              conta ao confirmar todas as transações. Transações bitcoin podem
              demorar mais para serem confirmadas dependendo da demanda da rede.
            </DescText>
          )}
        </TextContainer>
      </FutureTotalContainer>

      <FlatList
        data={btcWallets}
        renderItem={renderItem}
        keyExtractor={item => item.address}
      />
    </Container>
  );
}
