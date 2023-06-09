import React from 'react';
import {FlatList} from 'react-native';
import {WalletContainer} from '../styles/styles';
import {IWallet, IWalletData} from '../../screen/HomeScreen/interfaces';
import {WalletCardItem} from '../walletCard/WalletCardItem';
import {ITypeExtract} from '../transactionList/type';

const renderIWalletCard = ({item}: {item: IWallet}) => {
  return (
    <WalletCardItem
      name={item.name || ''}
      coin={item.WalletType || ''}
      address={item.address}
    />
  );
};

export const WalletList = ({
  data,
  isUpdate,
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
          renderItem={({item}) => renderIWalletCard({item})}
          keyExtractor={item => item.address}
          extraData={isUpdate}
        />
      </WalletContainer>
    </>
  );
};
