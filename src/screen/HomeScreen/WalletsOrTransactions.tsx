import React, {useState, useContext} from 'react';
import {
  ButtonFilterWalletsOrTransactions,
  ContainerTransactionsDate,
  Transactions,
  ContainerWalletsAndTransactions,
  OptionsWalletsOrTransactions,
  Text1,
  Text2,
  WalletsOrTransactionsText,
  ContainerTransaction,
  ViewCollumn,
  ViewRow,
} from './WalletsOrTransactions.style';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {AuthContext} from '../../contexts/auth';
import {WalletList} from '../../component/walletList/WalletList';
import IconPending from '../../assets/icon-pending.svg';
import IconReceived from '../../assets/icon-received.svg';
import IconSent from '../../assets/icon-sent.svg';
import IconRigth from '../../assets/icon-rigth.svg';

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
        <ContainerTransactionsDate>
          <Text1>24 de junho</Text1>
          <Transactions>
            <ContainerTransaction>
              <ViewRow>
                <IconPending />
                <ViewCollumn>
                  <Text1>Enviado</Text1>
                  <Text2>Nome da carteira</Text2>
                </ViewCollumn>
              </ViewRow>

              <ViewCollumn>
                <Text1>+ 0.00099 BTC</Text1>
                <Text2>+ 4.45 USD</Text2>
              </ViewCollumn>
              <IconRigth />
            </ContainerTransaction>

            <ContainerTransaction>
              <ViewRow>
                <IconReceived />
                <ViewCollumn>
                  <Text1>Recebido</Text1>
                  <Text2>Nome da carteira</Text2>
                </ViewCollumn>
              </ViewRow>

              <ViewCollumn>
                <Text1>+ 0.00099 BTC</Text1>
                <Text2>+ 4.45 USD</Text2>
              </ViewCollumn>
              <IconRigth />
            </ContainerTransaction>

            <ContainerTransaction>
              <ViewRow>
                <IconSent />
                <ViewCollumn>
                  <Text1>Pendente</Text1>
                  <Text2>Nome da carteira</Text2>
                </ViewCollumn>
              </ViewRow>

              <ViewCollumn>
                <Text1>+ 0.00099 BTC</Text1>
                <Text2>+ 4.45 USD</Text2>
              </ViewCollumn>
              <IconRigth />
            </ContainerTransaction>
          </Transactions>
        </ContainerTransactionsDate>
      )}
    </ContainerWalletsAndTransactions>
  );
}
