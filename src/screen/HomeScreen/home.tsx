import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {useGetWallets} from '../../component/hooks/useGetWallets';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useUpdateChart} from '../../component/hooks/useUpdateChart';
import {
  AccountBalanceContainer,
  AccountContainerSupport,
  BalanceText,
  Description,
  IconContainer,
  LoadingContainer,
  OptionButtonAll,
  OptionsButton,
  OptionsContainer,
} from './Home.styles';
import BankIcon from '../../assets/bank.svg';
import TransferIcon from '../../assets/transfer.svg';
import WalletIcon from '../../assets/wallet.svg';
import TrashIcon from '../../assets/trash.svg';
import {WalletList} from '../../component/walletList/WalletList';

export function Home() {
  const {isUpdate} = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const refetchTime = 10;
  const {data, loading, refetch} = useGetWallets();
  const totalBalance = data?.getFormatedData[0].totalBalance;

  useUpdateChart(totalBalance);

  useEffect(() => {
    setTimeout(refetch, refetchTime);
  }, [refetch, isUpdate]);

  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#0a0909" />
        </LoadingContainer>
      ) : (
        <>
          <AccountContainerSupport
            onPress={() => navigation.navigate('EvoScreen')}>
            <AccountBalanceContainer>
              <BalanceText>Conta</BalanceText>
              <BalanceText>US$ {totalBalance?.toFixed(2)}</BalanceText>
            </AccountBalanceContainer>
            <IconContainer>
              <BankIcon width={30} height={30} fill="#212121" />
            </IconContainer>
          </AccountContainerSupport>
          <OptionsContainer>
            <OptionButtonAll>
              <OptionsButton onPress={() => navigation.navigate('EvoScreen')}>
                <BankIcon width={20} height={30} fill="#212121" />
              </OptionsButton>
              <Description>Evolução</Description>
            </OptionButtonAll>
            <OptionButtonAll>
              <OptionsButton>
                <WalletIcon width={20} height={30} fill="#212121" />
              </OptionsButton>
              <Description>Adicionar</Description>
            </OptionButtonAll>
            <OptionButtonAll>
              <OptionsButton>
                <TransferIcon width={30} height={40} fill="#212121" />
              </OptionsButton>
              <Description>Transferir</Description>
            </OptionButtonAll>
            <OptionButtonAll>
              <OptionsButton>
                <TrashIcon width={20} height={30} fill="#212121" />
              </OptionsButton>
              <Description>Excluir</Description>
            </OptionButtonAll>
          </OptionsContainer>
          <WalletList data={data} isUpdate={isUpdate} />
        </>
      )}
    </>
  );
}
