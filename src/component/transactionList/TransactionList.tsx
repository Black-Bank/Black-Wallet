import React from 'react';
import {FlatList} from 'react-native';
import {WalletContainer} from '../styles/styles';
import {ITypeExtract} from './type';
import {TransactionCard} from '../trasactionCard/TransactionCard';

const renderITransactionCard = ({item}: {item: ITypeExtract}) => {
  return (
    <TransactionCard
      date={item.date}
      confirmed={item.confirmed || false}
      value={item.value || 0}
      coinValue={item.coinValue || 0}
      addressFrom={item.addressFrom || ''}
    />
  );
};

export const TransactionList = ({
  data,
  isUpdate,
}: {
  data: {getExtract: ITypeExtract[]};
  isUpdate: boolean;
}) => {
  return (
    <>
      <WalletContainer>
        <FlatList
          data={data?.getExtract}
          renderItem={({item}) => renderITransactionCard({item})}
          keyExtractor={item => item.addressFrom}
          extraData={isUpdate}
        />
      </WalletContainer>
    </>
  );
};
