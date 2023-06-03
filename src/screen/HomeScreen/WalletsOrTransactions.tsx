import React, {useState, useContext} from 'react';
import {
  ButtonFilterWalletsOrTransactions,
  ContainerWalletsAndTransactions,
  OptionsWalletsOrTransactions,
  WalletsOrTransactionsText,
} from './WalletsOrTransactions.style';
import {Text} from 'react-native';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {AuthContext} from '../../contexts/auth';
import {WalletList} from '../../component/walletList/WalletList';

export function WalletsOrTransactions() {
  const [button1Pressed, setButton1Pressed] = useState(true);
  const [button2Pressed, setButton2Pressed] = useState(false);
  const {data} = useGetWallets();
  const {isUpdate} = useContext(AuthContext);

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
        <WalletList data={data} isUpdate={isUpdate} />
      ) : (
        <Text>Transações</Text>
      )}
    </ContainerWalletsAndTransactions>
  );
}
