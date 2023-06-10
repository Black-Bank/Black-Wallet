import React from 'react';
import {
  ContainerTransaction,
  ContainerTransactionsDate,
  Text1,
  Text2,
  TextCoinValue,
  Transactions,
  ViewCollumn,
  ViewRow,
} from '../transactionList/transaction.style';
import IconPending from '../../assets/icon-pending.svg';
import IconReceived from '../../assets/icon-received.svg';
import IconSent from '../../assets/icon-sent.svg';
// import IconRigth from '../../assets/icon-rigth.svg';
import {ITypeCardTransaction} from '../transactionList/type';

export function TransactionCard({
  date,
  confirmed,
  addressFrom,
  coinValue,
  value,
}: ITypeCardTransaction) {
  const formatDate = (dateStr: Date) => {
    const day = new Date(dateStr).getDate();
    const year = new Date(dateStr).getFullYear();
    const months = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ];
    const month = months[new Date(dateStr).getMonth()];
    return `${day} de ${month} de ${year}`;
  };

  const isRecived = Boolean(value >= 0);
  const truncatedString =
    addressFrom.slice(0, 3) + '...' + addressFrom.slice(-3);

  return (
    <ContainerTransactionsDate>
      <Text1>{formatDate(date)}</Text1>
      <Transactions>
        <ContainerTransaction>
          <ViewRow>
            {confirmed ? (
              isRecived ? (
                <IconReceived />
              ) : (
                <IconSent />
              )
            ) : (
              <IconPending />
            )}
            <ViewCollumn>
              <Text1>
                {confirmed ? (isRecived ? 'Recebido' : 'Enviado') : 'Pendente'}
              </Text1>
              <Text2>{truncatedString}</Text2>
            </ViewCollumn>
          </ViewRow>

          <ViewCollumn>
            <TextCoinValue isRecived={isRecived}>
              {isRecived ? `+ ${coinValue}` : `${coinValue}`}
            </TextCoinValue>
            <Text2>{isRecived ? `+ ${value}` : `${value}`} USD</Text2>
          </ViewCollumn>
          {/* <IconRigth /> */}
        </ContainerTransaction>
      </Transactions>
    </ContainerTransactionsDate>
  );
}
