/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TickIcon from '../../assets/Tick.svg';
import TickGreenIcon from '../../assets/TickGreen.svg';
import CrossIcon from '../../assets/Cross.svg';
import {ContainerRules, ContentRules, TextRules} from './rulesForm.style';

interface IParamsProps {
  params: {
    quantity: boolean;
    lowercase: boolean;
    uppercase: boolean;
    special: boolean;
    number: boolean;
    password: String;
  };
}

const RulesForm = ({params}: IParamsProps) => {
  const {lowercase, number, quantity, special, uppercase, password} = params;

  return (
    <ContainerRules>
      <ContentRules>
        {password.length === 0 ? (
          <TickIcon />
        ) : quantity ? (
          <TickGreenIcon />
        ) : (
          <CrossIcon />
        )}
        <TextRules
          style={{
            color:
              password.length === 0
                ? '#828282'
                : quantity
                ? '#27AE60'
                : '#EB5757',
            fontWeight: password.length === 0 ? '300' : '600',
          }}>
          Deve conter no mínimo 8 caracteres
        </TextRules>
      </ContentRules>
      <ContentRules>
        {password.length === 0 ? (
          <TickIcon />
        ) : number ? (
          <TickGreenIcon />
        ) : (
          <CrossIcon />
        )}
        <TextRules
          style={{
            color:
              password.length === 0
                ? '#828282'
                : number
                ? '#27AE60'
                : '#EB5757',
            fontWeight: password.length === 0 ? '300' : '600',
          }}>
          Deve conter no mínimo um número
        </TextRules>
      </ContentRules>
      <ContentRules>
        {password.length === 0 ? (
          <TickIcon />
        ) : lowercase ? (
          <TickGreenIcon />
        ) : (
          <CrossIcon />
        )}
        <TextRules
          style={{
            color:
              password.length === 0
                ? '#828282'
                : lowercase
                ? '#27AE60'
                : '#EB5757',
            fontWeight: password.length === 0 ? '300' : '600',
          }}>
          Deve conter no mínimo uma letra minúscula
        </TextRules>
      </ContentRules>
      <ContentRules>
        {password.length === 0 ? (
          <TickIcon />
        ) : uppercase ? (
          <TickGreenIcon />
        ) : (
          <CrossIcon />
        )}
        <TextRules
          style={{
            color:
              password.length === 0
                ? '#828282'
                : uppercase
                ? '#27AE60'
                : '#EB5757',
            fontWeight: password.length === 0 ? '300' : '600',
          }}>
          Deve conter no mínimo uma letra maíscula
        </TextRules>
      </ContentRules>
      <ContentRules>
        {password.length === 0 ? (
          <TickIcon />
        ) : special ? (
          <TickGreenIcon />
        ) : (
          <CrossIcon />
        )}
        <TextRules
          style={{
            color:
              password.length === 0
                ? '#828282'
                : special
                ? '#27AE60'
                : '#EB5757',
            fontWeight: password.length === 0 ? '300' : '600',
          }}>
          Deve conter no mínimo um caracter especial
        </TextRules>
      </ContentRules>
    </ContainerRules>
  );
};

export default RulesForm;
