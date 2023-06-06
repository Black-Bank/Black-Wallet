import React from 'react';
import {
  CardAddOrDeleteWallet,
  ContainerAddOrDeleteWallet,
  ContentText,
  DescriptionCard,
  TitleCard,
} from './CardAddAndDelete.styles';
import AddIcon from '../../assets/icon-add.svg';
import ArrIcon from '../../assets/arr.svg';

export const CardAddAndDelete = () => {
  return (
    <ContainerAddOrDeleteWallet>
      <CardAddOrDeleteWallet>
        <AddIcon width={40} height={40} style={{marginBottom: 15}} />
        <ContentText>
          <TitleCard>Adicionar Carteira</TitleCard>
          <DescriptionCard>
            Gerencie até 6 carteiras simultaneamente
          </DescriptionCard>
        </ContentText>
        <ArrIcon />
      </CardAddOrDeleteWallet>
      <CardAddOrDeleteWallet>
        <AddIcon width={40} height={40} style={{marginBottom: 15}} />
        <ContentText>
          <TitleCard>Excluir Carteira</TitleCard>
          <DescriptionCard>
            Lembre-se de resgatar suas criptos antes de excluir
          </DescriptionCard>
        </ContentText>
        <ArrIcon />
      </CardAddOrDeleteWallet>
    </ContainerAddOrDeleteWallet>
  );
};
