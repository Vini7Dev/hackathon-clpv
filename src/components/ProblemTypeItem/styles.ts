import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  inter_extraBold,
} = theme.fonts;

export const Cotainer = styled.TouchableOpacity`
  width: 100%;
  position: relative;
  margin-bottom: 12px;
`;

export const Image = styled.Image`
  width: 100%;
  border-radius: 8px;
`;

export const Description = styled.Text`
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: #FFFFFF;
  font-size: 24px;
  font-family: ${inter_extraBold};
  text-align: right;
`;
