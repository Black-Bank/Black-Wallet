/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TickIcon from '../../assets/Tick.svg';
import TickGreenIcon from '../../assets/TickGreen.svg';
import {ContainerRules, ContentRules, TextRules} from './rulesForm.style';

interface IParamsProps {
  params: {
    quantity: boolean;
    lowercase: boolean;
    uppercase: boolean;
    special: boolean;
    number: boolean;
  };
}

const RulesForm = ({params}: IParamsProps) => {
  const {lowercase, number, quantity, special, uppercase} = params;

  return (
    <ContainerRules>
      <ContentRules>
        {quantity ? <TickGreenIcon /> : <TickIcon />}
        <TextRules
          style={{
            color: quantity ? '#27AE60' : '#828282',
            fontWeight: quantity ? '600' : '300',
          }}>
          Deve conter no mínimo 8 caracteres
        </TextRules>
      </ContentRules>
      <ContentRules>
        {number ? <TickGreenIcon /> : <TickIcon />}
        <TextRules
          style={{
            color: number ? '#27AE60' : '#828282',
            fontWeight: number ? '600' : '300',
          }}>
          Deve conter no mínimo um número
        </TextRules>
      </ContentRules>
      <ContentRules>
        {lowercase ? <TickGreenIcon /> : <TickIcon />}
        <TextRules
          style={{
            color: lowercase ? '#27AE60' : '#828282',
            fontWeight: lowercase ? '600' : '300',
          }}>
          Deve conter no mínimo uma letra minúscula
        </TextRules>
      </ContentRules>
      <ContentRules>
        {uppercase ? <TickGreenIcon /> : <TickIcon />}
        <TextRules
          style={{
            color: uppercase ? '#27AE60' : '#828282',
            fontWeight: uppercase ? '600' : '300',
          }}>
          Deve conter no mínimo uma letra maíscula
        </TextRules>
      </ContentRules>
      <ContentRules>
        {special ? <TickGreenIcon /> : <TickIcon />}
        <TextRules
          style={{
            color: special ? '#27AE60' : '#828282',
            fontWeight: special ? '600' : '300',
          }}>
          Deve conter no mínimo um caracter especial
        </TextRules>
      </ContentRules>
    </ContainerRules>
  );
};

export default RulesForm;
