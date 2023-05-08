import React from 'react';
import {IFutureCard} from './types';
import {
  BoxCardTitle,
  CardFutureContainer,
  FutureCard,
  FutureCardTitle,
  FutureCardWallet,
  MoneyIn,
  MoneyOut,
} from './future.style';
import {ECoinType} from '../../component/types/interfaces';
import BTCLogo from '../../assets/BTCLogo.svg';
import ETHLogo from '../../assets/ETHLogo.svg';
import {numberFormatter} from '../../component/utils/functions/Format';

export function FutureCardItem({name, value, walletType}: IFutureCard) {
  return (
    <>
      {value !== 0 ? (
        <FutureCard>
          <FutureCardWallet>
            {walletType === ECoinType.BTC && <BTCLogo width={50} height={50} />}
            {walletType === ECoinType.ETH && <ETHLogo width={50} height={50} />}
            <CardFutureContainer>
              <FutureCardTitle>{name}</FutureCardTitle>
            </CardFutureContainer>
          </FutureCardWallet>
          <BoxCardTitle>
            {value > 0 ? (
              <MoneyIn>Depósito: {numberFormatter(value)} USD</MoneyIn>
            ) : (
              <MoneyOut>Retirada: -{numberFormatter(value)} USD</MoneyOut>
            )}
          </BoxCardTitle>
        </FutureCard>
      ) : null}
    </>
  );
}
