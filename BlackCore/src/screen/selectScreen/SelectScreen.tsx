import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ButtonTitle} from '../../component/styles/styles';

export function Card({
  isClick,
  text,
  isSelected,
}: {
  isClick: boolean;
  text: string;
  isSelected: string;
}) {
  return (
    <>
      {isClick && (
        <View style={styles.card}>
          {text === 'BTC' && (
            <Image
              source={require(`../../assets/BTCLogo.png`)}
              style={styles.image}
            />
          )}
          {text === 'ETH' && (
            <Image
              source={require(`../../assets/ETHLogo.png`)}
              style={styles.image}
            />
          )}

          <View style={styles.cardContent}>
            <ButtonTitle>{text}</ButtonTitle>
          </View>
        </View>
      )}
      {!isClick && (
        <View style={styles.cardNotChoose}>
          {text === 'BTC' && (
            <Image
              source={require(`../../assets/BTCLogo.png`)}
              style={styles.image}
            />
          )}
          {text === 'ETH' && (
            <Image
              source={require(`../../assets/ETHLogo.png`)}
              style={styles.image}
            />
          )}

          <View style={styles.cardContent}>
            <ButtonTitle>{text}</ButtonTitle>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#121212',
    shadowOffset: {width: 0.8, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardNotChoose: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#3f3f40',
    shadowOffset: {width: 0.8, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    height: 40,
    width: 40,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    alignItems: 'center',
  },
});
