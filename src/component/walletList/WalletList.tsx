import React from 'react';
import {FlatList} from 'react-native';
import {WalletContainer} from '../styles/styles';
import {IWallet, IWalletData} from '../../screen/HomeScreen/interfaces';
import {WalletCardItem} from '../walletCard/WalletCardItem';
import {ITypeExtract} from '../transactionList/type';

const renderIWalletCard = ({
  item,
  data,
  extract,
}: {
  item: IWallet;
  data: {getFormatedData: IWalletData[]};
  extract: {getExtract: ITypeExtract[]};
}) => {
  return (
    <WalletCardItem
      name={item.name || ''}
      coin={item.WalletType || ''}
      address={item.address}
      data={data?.getFormatedData}
      extract={extract?.getExtract}
    />
  );
};

export const WalletList = ({
  data,
  isUpdate,
  extract,
}: {
  data: {getFormatedData: IWalletData[]};
  isUpdate: boolean;
  extract: {getExtract: ITypeExtract[]};
}) => {
  return (
    <>
      <WalletContainer>
        <FlatList
          data={data?.getFormatedData}
          renderItem={({item}) => renderIWalletCard({item, data, extract})}
          keyExtractor={item => item.address}
          extraData={isUpdate}
        />
      </WalletContainer>
    </>
  );
};
