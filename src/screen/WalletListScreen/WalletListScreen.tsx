import React, {useContext} from 'react';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {AuthContext} from '../../contexts/auth';
import {Footer} from '../../component/footer/Footer';
import {ScrollView} from 'react-native-gesture-handler';
import {ViewBanceInfo} from '../../component/cardBalanceInfo/CardBalanceInfo';
import {Text} from 'react-native-svg';
import {
  ButtonCreateWallet,
  CardCreateWallet,
  ContainerIconsWallet,
  ContainerWallets,
  ContentWalletList,
  DescriptionCreateWallet,
  TextButton,
  TitleCreateWallet,
  TitleWallets,
} from './WalletList.styles';
import {CardAddAndDelete} from './CardAddAndDelleteWallet';
import {WalletList} from '../../component/walletList/WalletList';
import {CardsBuyCryptos} from '../HomeScreen/CardsBuyCryptos';
import {CardsDistribuition} from './CardsDistribution';
import BTCIcon from '../../assets/icon-btc-wallet.svg';
import ETHIcon from '../../assets/icon-eth-wallet.svg';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const WalletListScreen = () => {
  const {data} = useGetWallets();
  const {isUpdate} = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateCreateWallet = () => {
    navigation.navigate('CreateWallet');
  };

  return (
    <>
      <ScrollView>
        <ContentWalletList>
          <ViewBanceInfo>
            <Text>Todas carteiras</Text>
          </ViewBanceInfo>
          <CardAddAndDelete />
          <CardsDistribuition />
          <ContainerWallets>
            <TitleWallets>Carteiras</TitleWallets>
            {data.getFormatedData.length > 0 ? (
              <WalletList data={data} isUpdate={isUpdate} />
            ) : (
              <CardCreateWallet>
                <ContainerIconsWallet>
                  <ETHIcon style={styles.ethIcon} />
                  <BTCIcon style={styles.btcIcon} />
                </ContainerIconsWallet>

                <TitleCreateWallet>Crie uma carteira</TitleCreateWallet>
                <DescriptionCreateWallet>
                  Você ainda não possui uma carteira adicionada.
                </DescriptionCreateWallet>
                <ButtonCreateWallet onPress={() => navigateCreateWallet()}>
                  <TextButton>Criar carteira</TextButton>
                </ButtonCreateWallet>
              </CardCreateWallet>
            )}
          </ContainerWallets>
          <CardsBuyCryptos />
        </ContentWalletList>
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  btcIcon: {
    transform: [{translateX: -2.5}],
  },
  ethIcon: {
    transform: [{translateX: 2.5}],
  },
});
