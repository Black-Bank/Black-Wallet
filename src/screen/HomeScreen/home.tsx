import React, {useContext, useEffect} from 'react';
import * as S from '../../component/styles/styles';
import {FlatList, StatusBar, View} from 'react-native';
import {WalletCard} from '../../component/walletCard/WalletCard';
import {HOME} from '../../component/strings/pt-br';
import {ModalButton} from '../../component/Modal/modalButton/ModalButton';
import {AuthContext} from '../../contexts/auth';
import {useGetWallets} from '../../component/hooks/useGetWallets';

import {IWallet} from './interfaces';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useUpdateChart} from '../../component/hooks/useUpdateChart';
import {AccountBalanceContainer, BalanceText} from './Home.styles';
import BankIcon from '../../assets/bank.svg';

export function Home() {
  const {isUpdate} = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const refetchTime = 10;
  const {data, refetch} = useGetWallets();
  const totalBalance = data?.getFormatedData[0].totalBalance;

  useUpdateChart(totalBalance);

  const renderIWalletCard = ({item}: {item: IWallet}) => (
    <WalletCard
      name={item.name}
      coin={item.WalletType}
      address={item.address}
      data={data?.getFormatedData}
    />
  );
  useEffect(() => {
    setTimeout(refetch, refetchTime);
  }, [refetch, isUpdate]);
  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      <AccountBalanceContainer>
        <BalanceText>Conta</BalanceText>
        <BalanceText>R$ 10.00</BalanceText>
      </AccountBalanceContainer>
      <BankIcon width={30} height={30} fill="#212121" />
      <S.WalletContainer>
        <S.Title>{HOME.wallets}</S.Title>
        <FlatList
          data={data?.getFormatedData}
          renderItem={renderIWalletCard}
          keyExtractor={item => item.address}
          extraData={isUpdate}
        />
      </S.WalletContainer>
    </>
  );
}
