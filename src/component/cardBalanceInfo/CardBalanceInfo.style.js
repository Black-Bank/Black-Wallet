import styled from 'styled-components/native';

export const ContainerLogoMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const ContainerTotalBalance = styled.View`
  padding: 15px 15px 0;
`;

export const ContentTop = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  padding-top: 20px;
  margin-bottom: 12px;
`;

export const TextGray1Bold = styled.Text`
  color: #828282;
  font-weight: bold;
  font-size: 14px;
`;

export const TextGray1Normal = styled.Text`
  color: #828282;
  font-weight: 400;
  font-size: 14px;
`;

export const TextGray2Large = styled.Text`
  color: #414561;
  font-size: 48px;
`;

export const TextGray2Small = styled.Text`
  color: #414561;
  font-size: 14px;
  position: absolute;
  right: -30;
  top: 8;
`;

export const ViewSuport = styled.View`
  position: relative;
`;

export const ViewLastContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewPercentual = styled.View`
  flex-direction: row;
  padding-bottom: 15px;
`;

export const Textpercentage = styled.Text`
  color: ${props => (props.value >= 0 ? '#51ae6f' : 'red')};
  margin-left: 10px;
`;

export const ViewChildrenBalanceInfo = styled.View`
  background-color: #f9fafb;
  padding: 10px;
`;

export const ContainerValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
`;
