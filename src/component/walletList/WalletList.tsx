import React from 'react';
import {FlatList} from 'react-native';
import {Title, WalletContainer} from '../styles/styles';
import {IWallet, IWalletData} from '../../screen/HomeScreen/interfaces';
import {HOME} from '../strings/pt-br';
import {WalletCardItem} from '../walletCard/WalletCardItem';

const renderIWalletCard = ({
  item,
  data,
}: {
  item: IWallet;
  data: {getFormatedData: IWalletData[]};
}) => {
  return (
    <WalletCardItem
      name={item.name || ''}
      coin={item.WalletType || ''}
      address={item.address}
      data={data?.getFormatedData}
    />
  );
};

export const WalletList = ({
  data,
  isUpdate,
}: {
  data: {getFormatedData: IWalletData[]};
  isUpdate: boolean;
}) => {
  return (
    <>
      <WalletContainer>
        <Title>{HOME.wallets}</Title>
        <FlatList
          data={data?.getFormatedData}
          renderItem={({item}) => renderIWalletCard({item, data})}
          keyExtractor={item => item.address}
          extraData={isUpdate}
        />
      </WalletContainer>
    </>
  );
};
