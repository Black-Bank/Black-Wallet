import React from 'react';

import AddIcon from '../../assets/icon-add.svg';
import ArrIcon from '../../assets/arr.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CardAddOrDeleteWallet,
  ContainerAddOrDeleteWallet,
  ContentText,
  DescriptionCard,
  TitleCard,
} from './CardAdd.styles';

export const CardAdd = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateCreateWallet = () => {
    navigation.navigate('CreateWallet');
  };

  return (
    <ContainerAddOrDeleteWallet>
      <CardAddOrDeleteWallet onPress={() => navigateCreateWallet()}>
        <AddIcon width={40} height={40} />
        <ContentText>
          <TitleCard>Adicionar Carteira</TitleCard>
          <DescriptionCard>
            Gerencie até 6 carteiras simultaneamente
          </DescriptionCard>
        </ContentText>
        <ArrIcon />
      </CardAddOrDeleteWallet>
    </ContainerAddOrDeleteWallet>
  );
};
