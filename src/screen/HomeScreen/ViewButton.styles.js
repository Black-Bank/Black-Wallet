import styled from 'styled-components/native';

export const ButtonFilterHome = styled.TouchableOpacity`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${props => (props.isPressed ? '#624AA7' : 'transparent')};
`;

export const ContainerButtonsFilter = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TextButtonFilter = styled.Text`
  color: ${props => (props.isPressed ? '#ffffff' : '#828282')};
  font-weight: ${props => (props.isPressed ? 600 : 300)};
`;
