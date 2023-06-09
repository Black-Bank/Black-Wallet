import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ChartContainer = styled.View`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    z-index: 5;
  }
`;
export const OverlayComponent = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -30px;
  margin-left: -30px;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 40px;
  z-index: 3;
`;
