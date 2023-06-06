/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import AddIcon from '../../assets/icon-add.svg';
import ArrIcon from '../../assets/arr.svg';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {
  CardCountWallet,
  ContainerCountAndDistribution,
  ContentTextNotWallet,
  NumberCountWallet,
  TextCountWallet,
  TextNotWallet,
} from './CardsDistribution.styles';

export const CardsDistribuition = () => {
  const {data} = useGetWallets();

  return (
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
    </ContainerCountAndDistribution>
  );
};
