/* eslint-disable no-extra-boolean-cast */
import React, {useContext, useState} from 'react';
import LogoHomeIcon from '../../assets/LogoHome.svg';
import MenuBurguerIcon from '../../assets/MenuBurguer.svg';
import EyeIcon from '../../assets/Eye.svg';
import {
  ContainerLogoMenu,
  ContainerTotalBalance,
  ContainerValue,
  ContentTop,
  TextGray1Bold,
  TextGray1Normal,
  TextGray2Large,
  TextGray2Small,
  ViewLastContent,
  ViewSuport,
} from './DollarBalance.style';
import {ButtonSeeBallance} from '../transactionList/transaction.style';
import {AuthContext} from '../../contexts/auth';
import {ECoinType} from '../types/interfaces';

export const ViewDollarBalance = ({dollarBalance}: {dollarBalance: number}) => {
  const {dollarPrice} = useContext(AuthContext);
  const [seeBalanceInfo, setSeeBalanceInfo] = useState(true);

  let showSymbol = ECoinType.USD;

  return (
    <ContentTop>
      <ContainerLogoMenu>
        <LogoHomeIcon />
        <MenuBurguerIcon />
      </ContainerLogoMenu>
      <ContainerTotalBalance>
        <TextGray1Bold>Conta Dólar</TextGray1Bold>
        <ContainerValue>
          <ViewSuport>
            <TextGray2Large>
              {seeBalanceInfo
                ? dollarBalance
                  ? dollarBalance.toFixed(2)
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
              ? dollarBalance
                ? `≈ R$ ${(dollarBalance * dollarPrice).toFixed(2)}`
                : '≈ R$ 0,00'
              : '* * * * *'}
          </TextGray1Normal>
        </ViewLastContent>
      </ContainerTotalBalance>
    </ContentTop>
  );
};
