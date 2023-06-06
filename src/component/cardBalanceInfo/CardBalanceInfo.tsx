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
import {ButtonSeeBallance} from '../../screen/HomeScreen/WalletsOrTransactions.style';

interface IViewBalanceInfo {
  children: React.ReactNode;
}

export function ViewBanceInfo({children}: IViewBalanceInfo) {
  const [seeBalanceInfo, setSeeBalanceInfo] = useState(true);

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
              {seeBalanceInfo ? '4.000,40' : '*****'}
            </TextGray2Large>
            <TextGray2Small>USD</TextGray2Small>
          </ViewSuport>
          <ButtonSeeBallance onPress={() => setSeeBalanceInfo(!seeBalanceInfo)}>
            <EyeIcon />
          </ButtonSeeBallance>
        </ContainerValue>
        <ViewLastContent>
          <TextGray1Normal>
            {seeBalanceInfo ? '≈ R$ 20.000,20' : '* * * * *'}
          </TextGray1Normal>
          <ViewPercentual>
            <Text>Este mês:</Text>
            <Textpercentage value={seeBalanceInfo ? -1 : 0}>
              {seeBalanceInfo ? '-7.65%' : '* * *'}
            </Textpercentage>
          </ViewPercentual>
        </ViewLastContent>
      </ContainerTotalBalance>
      <ViewChildrenBalanceInfo>{children && children}</ViewChildrenBalanceInfo>
    </ContentTop>
  );
}
