import React, {useCallback, useContext, useEffect} from 'react';
import * as S from '../../component/styles/styles';
import {View, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Chart} from '../../component/chart/chart';
import {WalletCard} from '../../component/walletCard/WalletCard';
import {HOME} from '../../component/strings/pt-br';
import {ModalButton} from '../../component/Modal/modalButton/ModalButton';
import {AuthContext} from '../../contexts/auth';
import {useGetWallets} from '../../component/hooks/useGetWallets';

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {isUpdate} = useContext(AuthContext);

  const {data, refetch} = useGetWallets();
  const Refetch = useCallback(() => {
    console.log('Refetch');
    refetch();
  }, [refetch]);

  useEffect(() => {
    setTimeout(Refetch, 500);
  }, [Refetch, isUpdate]);

  const renderIWalletCard = ({
    item,
  }: {
    item: {name: string; address: string; WalletType: string};
  }) => <WalletCard name={item.name} coin={item.WalletType} value={10.72} />;
  console.log(isUpdate, data);
  return (
    <View style={styles.height}>
      <Chart />

      <S.WalletContainer>
        <S.Title>{HOME.wallets}</S.Title>
        <FlatList
          data={data?.getWallets}
          renderItem={renderIWalletCard}
          keyExtractor={item => item.address}
          extraData={isUpdate}
        />
        <ModalButton title={HOME.addWallet} />
      </S.WalletContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
});
