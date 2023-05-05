import React from 'react';
import {Container, FutureTotal, Title} from './future.style';
import {FutureCardItem} from './FutureCardItem';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {Text} from 'react-native';
import {IUnconfirmedWallet} from './types';

export function FutureScreen() {
  const {
    data: {getFormatedData},
  } = useGetWallets();

  console.log(getFormatedData);

  return (
    <Container>
      <Title>Lançamentos Futuros</Title>
      <FutureTotal>
        <Text>Total</Text>
        <Text>Reduce</Text>
      </FutureTotal>
      {getFormatedData.map(
        ({WalletType, name, unconfirmedBalance}: IUnconfirmedWallet) => {
          return (
            <FutureCardItem
              name={name}
              value={unconfirmedBalance}
              walletType={WalletType}
            />
          );
        },
      )}
    </Container>
  );
}
