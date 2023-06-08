/* eslint-disable no-extra-boolean-cast */
import React, {useState} from 'react';
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

interface IViewBalanceInfo {
  children: React.ReactNode;
  dataBalance: {getBalance: {month: number[]; week: number[]; day: number[]}};
  dollarPrice: number;
}

export function ViewBanceInfo({
  children,
  dataBalance,
  dollarPrice,
}: IViewBalanceInfo) {
  const [seeBalanceInfo, setSeeBalanceInfo] = useState(true);
  const totalBalance =
    dataBalance?.getBalance.day[dataBalance?.getBalance.day.length - 1];
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
    : null;

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
                ? totalBalance
                  ? totalBalance.toFixed(2)
                  : '0,00'
                : '*****'}
            </TextGray2Large>
            <TextGray2Small>USD</TextGray2Small>
          </ViewSuport>
          <ButtonSeeBallance onPress={() => setSeeBalanceInfo(!seeBalanceInfo)}>
            <EyeIcon />
          </ButtonSeeBallance>
        </ContainerValue>
        <ViewLastContent>
          <TextGray1Normal>
            {seeBalanceInfo
              ? totalBalance
                ? `≈ R$ ${(totalBalance * dollarPrice).toFixed(2)}`
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
