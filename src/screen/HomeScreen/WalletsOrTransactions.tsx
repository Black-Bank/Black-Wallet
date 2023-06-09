import React, {useContext, useState} from 'react';

import {useGetWallets} from '../../component/hooks/useGetWallets';
import {WalletList} from '../../component/walletList/WalletList';
import {TransactionList} from '../../component/transactionList/TransactionList';
import {
  ButtonFilterWalletsOrTransactions,
  ContainerWalletsAndTransactions,
  OptionsWalletsOrTransactions,
  WalletsOrTransactionsText,
} from '../../component/transactionList/transaction.style';
import {AuthContext} from '../../contexts/auth';

interface IWalletsOrTransactions {
  isUpdated: boolean;
}

export function WalletsOrTransactions({isUpdated}: IWalletsOrTransactions) {
  const {extract} = useContext(AuthContext);
  const [button1Pressed, setButton1Pressed] = useState(true);
  const [button2Pressed, setButton2Pressed] = useState(false);
  const {data} = useGetWallets();

  function handleButton1Press() {
    setButton1Pressed(true);
    setButton2Pressed(false);
  }

  function handleButton2Press() {
    setButton1Pressed(false);
    setButton2Pressed(true);
  }

  return (
    <ContainerWalletsAndTransactions>
      <OptionsWalletsOrTransactions>
        <ButtonFilterWalletsOrTransactions
          isPressed={button1Pressed}
          onPressIn={handleButton1Press}>
          <WalletsOrTransactionsText isPressed={button1Pressed}>
            Carteiras
          </WalletsOrTransactionsText>
        </ButtonFilterWalletsOrTransactions>
        <ButtonFilterWalletsOrTransactions
          isPressed={button2Pressed}
          onPressIn={handleButton2Press}>
          <WalletsOrTransactionsText isPressed={button2Pressed}>
            Transações
          </WalletsOrTransactionsText>
        </ButtonFilterWalletsOrTransactions>
      </OptionsWalletsOrTransactions>
      {button1Pressed ? (
        <WalletList data={data} isUpdate={isUpdated} extract={extract} />
      ) : (
        <>
          <WalletsOrTransactionsText>Transactions</WalletsOrTransactionsText>
          <TransactionList data={extract} isUpdate={isUpdated} />
        </>
      )}
    </ContainerWalletsAndTransactions>
  );
}
