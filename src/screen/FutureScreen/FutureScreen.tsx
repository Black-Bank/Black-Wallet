/* eslint-disable react-hooks/exhaustive-deps */
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
import ClockIcon from '../../assets/Clock.svg';
import ArrowUpIcon from '../../assets/Arrow.svg';
import ArrowDownIcon from '../../assets/ArrowDown.svg';

export function FutureScreen({route}: IUnconfirmedWallet) {
  const wallets = route.params;

  const btcWallets = Array.isArray(wallets)
    ? wallets?.filter(wallet => wallet?.WalletType === 'BTC')
    : [];
  const btcPrice = btcWallets[0]?.coinPrice;
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
    btcWallets?.reduce(
      (total, wallet) => total + wallet.unconfirmedBalance,
      0,
    ) * SatoshisToDollar;
  const isGain = Boolean(totalUnconfirmedBTCBalance >= 0);
  const hasBalance = Boolean(btcWallets.length);

  return (
    <Container>
      <Title>Lançamentos Futuros</Title>
      <FutureTotalContainer>
        <ClockIcon width={30} height={30} fill={'black'} />
        <TextContainer>
          {hasBalance ? (
            <TotalText value={isGain}>
              {isGain
                ? numberFormatter(totalUnconfirmedBTCBalance)
                : -numberFormatter(totalUnconfirmedBTCBalance)}{' '}
              USD
            </TotalText>
          ) : (
            <TotalText value={isGain}>0.00 USD</TotalText>
          )}
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
