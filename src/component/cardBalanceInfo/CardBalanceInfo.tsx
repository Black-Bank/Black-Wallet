/* eslint-disable no-extra-boolean-cast */
import React, {useContext, useState} from 'react';
import LogoHomeIcon from '../../assets/LogoHome.svg';
import MenuBurguerIcon from '../../assets/MenuBurguer.svg';
import EyeIcon from '../../assets/Eye.svg';
import {Text} from 'react-native';
import {
  ContainerLogoMenu,
  ContainerTotalBalance,
  ContainerValue,
  ContentTop,
  TextGray1Bold,
  TextGray1Normal,
  TextGray2Large,
  TextGray2Small,
  Textpercentage,
  ViewChildrenBalanceInfo,
  ViewLastContent,
  ViewPercentual,
  ViewSuport,
} from './CardBalanceInfo.style';
import {ButtonSeeBallance} from '../transactionList/transaction.style';
import {AuthContext} from '../../contexts/auth';
import {ECoinType} from '../types/interfaces';

interface IViewBalanceInfo {
  children: React.ReactNode;
}

export function ViewBanceInfo({children}: IViewBalanceInfo) {
  const {dollarPrice, dataBalance, balanceSelected, walletList} =
    useContext(AuthContext);
  const [seeBalanceInfo, setSeeBalanceInfo] = useState(true);
  const totalBalance = walletList.getFormatedData[0].totalBalance;

  let showBalance: number = 0;
  let showSymbol = '';

  const countWalletsBTCValue = walletList.getFormatedData
    ?.filter(wallet => wallet.WalletType === 'BTC')
    .reduce(
      (acc: number, wallet) => acc + wallet.balance * wallet.coinPrice,
      0,
    );
  const countWalletsETHValue = walletList.getFormatedData
    ?.filter(wallet => wallet.WalletType === 'ETH')
    .reduce(
      (acc: number, wallet) => acc + wallet.balance * wallet.coinPrice,
      0,
    );
  switch (balanceSelected) {
    case 'general':
      showBalance = totalBalance;
      showSymbol = ECoinType.USD;
      break;
    case ECoinType.BTC:
      showBalance = countWalletsBTCValue;
      showSymbol = ECoinType.USD;
      break;
    case ECoinType.ETH:
      showBalance = countWalletsETHValue;
      showSymbol = ECoinType.USD;
      break;
  }

  const monthBalance = Boolean(
    dataBalance?.getBalance.month[dataBalance?.getBalance.month.length - 1],
  )
    ? dataBalance?.getBalance.month[dataBalance?.getBalance.month.length - 1]
    : 0;
  const divider = 1;

  const percentage = Boolean(monthBalance)
    ? (
        ((totalBalance - monthBalance) /
          (Boolean(monthBalance) ? monthBalance : divider)) *
        100
      ).toFixed(2)
    : undefined;

  return (
    <ContentTop>
      <ContainerLogoMenu>
        <LogoHomeIcon />
        <MenuBurguerIcon />
      </ContainerLogoMenu>
      <ContainerTotalBalance>
        <TextGray1Bold>Saldo total</TextGray1Bold>
        <ContainerValue>
          <ViewSuport>
            <TextGray2Large>
              {seeBalanceInfo
                ? showBalance
                  ? showBalance.toFixed(2)
                  : '0,00'
                : '*****'}
            </TextGray2Large>
            <TextGray2Small>{showSymbol}</TextGray2Small>
          </ViewSuport>
          <ButtonSeeBallance onPress={() => setSeeBalanceInfo(!seeBalanceInfo)}>
            <EyeIcon />
          </ButtonSeeBallance>
        </ContainerValue>
        <ViewLastContent>
          <TextGray1Normal>
            {seeBalanceInfo
              ? showBalance
                ? `≈ R$ ${(showBalance * dollarPrice).toFixed(2)}`
                : '≈ R$ 0,00'
              : '* * * * *'}
          </TextGray1Normal>
          <ViewPercentual>
            {Boolean(percentage) ? <Text>Este mês:</Text> : undefined}
            <Textpercentage value={percentage}>
              {seeBalanceInfo
                ? `${Boolean(percentage) ? percentage + '%' : ''}`
                : '* * *'}
            </Textpercentage>
          </ViewPercentual>
        </ViewLastContent>
      </ContainerTotalBalance>
      <ViewChildrenBalanceInfo>{children && children}</ViewChildrenBalanceInfo>
    </ContentTop>
  );
}
