import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_WALLETS} from '../../client/queries/queries';
import {Container, RedContainer, Title} from './homeStyled';
import {Button, View, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {data} = useQuery(GET_WALLETS);

  const DATA = data?.getWallets;

  const Item = ({name}: {name: string}) => (
    <>
      <Title>{name}</Title>
      <Title>Host</Title>
    </>
  );

  const renderItem = ({item}: {item: {name: string; address: string}}) => (
    <Item name={item.name} />
  );

  return (
    <View style={styles.height}>
      <Container>
        <Title>Grafico</Title>
      </Container>
      <RedContainer>
        <Title>Carteiras</Title>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.address}
        />
        <Button
          title="Criar Carteira"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </RedContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
});
