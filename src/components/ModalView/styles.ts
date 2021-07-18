import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  primary, primary2,
} = theme.colors;

const {
  ubuntu_medium,
  inter_medium,
} = theme.fonts;

export const ModalElement = styled.Modal`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  margin: 30px 20px 0;
`;

export const Title = styled.Text`
  color: ${primary};
  font-size: 35px;
  font-family: ${ubuntu_medium};
  text-align: center;
`;

export const Message = styled.Text`
  color: ${primary2};
  font-size: 20px;
  font-family: ${inter_medium};
  margin-top: 20px;
`;
