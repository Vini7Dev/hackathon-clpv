import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  primary,
} = theme.colors;

export const Container = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: ${primary};
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 22px;
`;
