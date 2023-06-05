import React, {useContext} from 'react';
import {WalletList} from '../../component/walletList/WalletList';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {AuthContext} from '../../contexts/auth';
import {Footer} from '../../component/footer/Footer';
import {ScrollView} from 'react-native-gesture-handler';
import {ViewBanceInfo} from '../../component/cardBalanceInfo/CardBalanceInfo';
import {Text} from 'react-native-svg';
import {ContentWalletList} from './WalletList.styles';
import {ManagementWallets} from './ManagementWallets';
import {CardsBuyCryptos} from '../HomeScreen/CardsBuyCryptos';
export const WalletListScreen = () => {
  const {data} = useGetWallets();
  const {isUpdate} = useContext(AuthContext);

  return (
    <>
      <ScrollView>
        <ContentWalletList>
          <ViewBanceInfo>
            <Text>Todas carteiras</Text>
          </ViewBanceInfo>
          <ManagementWallets />
          <WalletList data={data} isUpdate={isUpdate} />
          <CardsBuyCryptos />
        </ContentWalletList>
      </ScrollView>
      <Footer />
    </>
  );
};
