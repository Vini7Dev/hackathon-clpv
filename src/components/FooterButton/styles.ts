import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  primary,
} = theme.colors;

export const Container = styled.TouchableHighlight`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: ${primary};
  background-color: #FFFFFF;
`;

export const ButtonText = styled.Text`
  margin-left: 4px;
  color: ${primary};
  font-size: 22px;
`;
