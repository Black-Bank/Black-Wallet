import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderTitle} from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import {HEADER} from '../strings/pt-br';

// Within your render function
export function Header() {
  return (
    <LinearGradient
      colors={['#3c0f69', '#121212']}
      useAngle={true}
      angle={45}
      style={styles.linearGradient}>
      <HeaderTitle>{HEADER.home}</HeaderTitle>
    </LinearGradient>
  );
}

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
