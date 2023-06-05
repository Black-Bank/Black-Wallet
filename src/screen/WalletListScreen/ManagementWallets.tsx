/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  CardAddOrDeleteWallet,
  CardCountWallet,
  CardDistribution,
  ContainerAddOrDeleteWallet,
  ContainerCountAndDistribution,
  ContainerManagementWallets,
  ContentText,
  ContentTextNotWallet,
  DescriptionCard,
  NumberCountWallet,
  TextCountWallet,
  TextNotWallet,
  TitleCard,
} from './ManagementWallets.styles';
import AddIcon from '../../assets/icon-add.svg';
import ArrIcon from '../../assets/arr.svg';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {IWallet} from '../HomeScreen/interfaces';

export const ManagementWallets = () => {
  const {data} = useGetWallets();
  const countWalletsBTC = data.getFormatedData.filter(
    (wallet: IWallet) => wallet.WalletType === 'BTC',
  ).length;
  const countWalletsETH = data.getFormatedData.filter(
    (wallet: IWallet) => wallet.WalletType === 'ETH',
  ).length;

  const quantidadeTotal = data.getFormatedData.length;
  const porcentagemBTC = Math.round((countWalletsBTC / quantidadeTotal) * 100);
  const porcentagemETH = Math.round((countWalletsETH / quantidadeTotal) * 100);
  console.log('BTC = ', porcentagemBTC.toFixed(1));
  console.log('ETH = ', porcentagemETH.toFixed(1));
  return (
    <ContainerManagementWallets>
      <ContainerAddOrDeleteWallet>
        <CardAddOrDeleteWallet>
          <AddIcon width={35} height={35} style={{marginBottom: 20}} />
          <ContentText>
            <TitleCard>Adicionar Carteira</TitleCard>
            <DescriptionCard>
              Gerencie até 6 carteiras simultaneamente
            </DescriptionCard>
          </ContentText>
          <ArrIcon />
        </CardAddOrDeleteWallet>
        <CardAddOrDeleteWallet>
          <AddIcon width={35} height={35} style={{marginBottom: 20}} />
          <ContentText>
            <TitleCard>Excluir Carteira</TitleCard>
            <DescriptionCard>
              Lembre-se de resgatar suas criptos antes de excluir
            </DescriptionCard>
          </ContentText>
          <ArrIcon />
        </CardAddOrDeleteWallet>
      </ContainerAddOrDeleteWallet>
      <ContainerCountAndDistribution>
        {data.getFormatedData.length > 0 ? (
          <CardCountWallet>
            <TextCountWallet>Você possui</TextCountWallet>
            <NumberCountWallet>{data.getFormatedData.length}</NumberCountWallet>
            <TextCountWallet>
              {data.getFormatedData.length === 1 ? 'Carteira' : 'Carteiras'}
            </TextCountWallet>
          </CardCountWallet>
        ) : (
          <ContentTextNotWallet>
            <TextNotWallet>
              Você ainda não possui uma carteira adicionada
            </TextNotWallet>
            <AddIcon width={35} height={35} />
          </ContentTextNotWallet>
        )}
        <CardDistribution>
        </CardDistribution>
      </ContainerCountAndDistribution>
    </ContainerManagementWallets>
  );
};
