import React, {useState} from 'react';
import {
  ContainerLogoMenu,
  ContainerTotalBalance,
  ContainerValue,
  ContentTop,
  TextGray1Bold,
  TextGray1Normal,
  TextGray2Large,
  TextGray2Small,
  TextGreen,
  ViewButtonsFilter,
  ViewLastContent,
  ViewPercentual,
  ViewSuport,
} from './Home.styles';
import LogoHomeIcon from '../../assets/LogoHome.svg';
import MenuBurguerIcon from '../../assets/MenuBurguer.svg';
import EyeIcon from '../../assets/Eye.svg';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function ViewBanceInfo() {
  const [button1Pressed, setButton1Pressed] = useState(true);
  const [button2Pressed, setButton2Pressed] = useState(false);
  const [button3Pressed, setButton3Pressed] = useState(false);

  const handleButton1PressIn = () => {
    setButton1Pressed(true);
  };

  const handleButton1PressOut = () => {
    setButton2Pressed(false);
    setButton3Pressed(false);
  };

  const handleButton2PressIn = () => {
    setButton2Pressed(true);
  };

  const handleButton2PressOut = () => {
    setButton1Pressed(false);
    setButton3Pressed(false);
  };

  const handleButton3PressIn = () => {
    setButton3Pressed(true);
  };

  const handleButton3PressOut = () => {
    setButton2Pressed(false);
    setButton1Pressed(false);
  };

  return (
    <ContentTop>
      <ContainerLogoMenu>
        <LogoHomeIcon />
        <MenuBurguerIcon />
      </ContainerLogoMenu>
      <ContainerTotalBalance>
        <TextGray1Bold>Saldo total</TextGray1Bold>
        <ContainerValue>
          <ViewSuport>
            <TextGray2Large>4.000,40</TextGray2Large>
            <TextGray2Small>USD</TextGray2Small>
          </ViewSuport>
          <EyeIcon />
        </ContainerValue>
        <ViewLastContent>
          <TextGray1Normal>≈ R$ 20.000,20</TextGray1Normal>
          <ViewPercentual>
            <Text>Este mês:</Text>
            <TextGreen>+7.65%</TextGreen>
          </ViewPercentual>
        </ViewLastContent>
      </ContainerTotalBalance>
      <ViewButtonsFilter>
        <TouchableOpacity
          style={[styles.button, button1Pressed && styles.buttonPressed]}
          onPressIn={handleButton1PressIn}
          onPressOut={handleButton1PressOut}>
          <Text>Saldo Geral</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, button2Pressed && styles.buttonPressed]}
          onPressIn={handleButton2PressIn}
          onPressOut={handleButton2PressOut}>
          <Text>Enviada</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, button3Pressed && styles.buttonPressed]}
          onPressIn={handleButton3PressIn}
          onPressOut={handleButton3PressOut}>
          <Text>Recebidas</Text>
        </TouchableOpacity>
      </ViewButtonsFilter>
    </ContentTop>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    marginBottom: 10,
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
});
