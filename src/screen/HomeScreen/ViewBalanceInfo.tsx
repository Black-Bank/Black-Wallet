import React from 'react';
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
} from './Home.styles';
import LogoHomeIcon from '../../assets/LogoHome.svg';
import MenuBurguerIcon from '../../assets/MenuBurguer.svg';
import EyeIcon from '../../assets/Eye.svg';
import {Text} from 'react-native';

interface IViewBalanceInfo {
  children: React.ReactNode;
}

export function ViewBanceInfo({children}: IViewBalanceInfo) {
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
            <TextGray2Large>4.000,40</TextGray2Large>
            <TextGray2Small>USD</TextGray2Small>
          </ViewSuport>
          <EyeIcon />
        </ContainerValue>
        <ViewLastContent>
          <TextGray1Normal>≈ R$ 20.000,20</TextGray1Normal>
          <ViewPercentual>
            <Text>Este mês:</Text>
            <Textpercentage value={-1}>-7.65%</Textpercentage>
          </ViewPercentual>
        </ViewLastContent>
      </ContainerTotalBalance>
      <ViewChildrenBalanceInfo>{children && children}</ViewChildrenBalanceInfo>
    </ContentTop>
  );
}
