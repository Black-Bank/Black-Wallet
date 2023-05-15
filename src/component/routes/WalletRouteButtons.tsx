import React from 'react';
import {
  DescriptionWalletHeader,
  OptionButtonAll,
  OptionsButton,
  OptionsContainerWalletHeader,
} from '../../screen/HomeScreen/Home.styles';
import TransferIcon from '../../assets/transfer.svg';
import TrashIcon from '../../assets/trash.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export const WalletButtonRoute = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleDelete = () => {
    navigation.navigate('DeleteWalletScreen');
  };
  const handleTransaction = () => {
    navigation.navigate('TransactionScreen');
  };
  return (
    <>
      <OptionsContainerWalletHeader>
        <OptionButtonAll>
          <OptionsButton onPress={handleTransaction}>
            <TransferIcon width={30} height={30} fill={'#fff'} />
          </OptionsButton>
          <DescriptionWalletHeader>Transferir</DescriptionWalletHeader>
        </OptionButtonAll>
        <OptionButtonAll>
          <OptionsButton onPress={handleDelete}>
            <TrashIcon width={30} height={30} fill={'#fff'} />
          </OptionsButton>
          <DescriptionWalletHeader>Deletar</DescriptionWalletHeader>
        </OptionButtonAll>
      </OptionsContainerWalletHeader>
    </>
  );
};
