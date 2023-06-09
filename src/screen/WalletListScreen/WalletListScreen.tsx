import React, {useContext} from 'react';
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
import {WalletList} from '../../component/walletList/WalletList';
import {CardsBuyCryptos} from '../HomeScreen/CardsBuyCryptos';
import {CardsDistribuition} from './CardsDistribution';
import BTCIcon from '../../assets/icon-btc-wallet.svg';
import ETHIcon from '../../assets/icon-eth-wallet.svg';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CardAdd} from './CardAdd';

export const WalletListScreen = () => {
  const {isUpdate, dollarPrice, dataBalance, extract, walletList} =
    useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateCreateWallet = () => {
    navigation.navigate('CreateWallet');
  };

  return (
    <>
      <ScrollView>
        <ContentWalletList>
          <ViewBanceInfo dataBalance={dataBalance} dollarPrice={dollarPrice}>
            <Text>Todas carteiras</Text>
          </ViewBanceInfo>
          <CardAdd />
          <CardsBuyCryptos />
          <CardsDistribuition data={walletList} />
          <ContainerWallets>
            <TitleWallets>Carteiras</TitleWallets>
            {walletList.getFormatedData.length > 0 ? (
              <WalletList
                extract={extract}
                data={walletList}
                isUpdate={isUpdate}
              />
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
