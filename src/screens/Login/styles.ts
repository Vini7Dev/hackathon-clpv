import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  primary2,
} = theme.colors;

const {
  interRegular,
} = theme.fonts;

export const Container = styled.ScrollView`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const TitleView = styled.View`
  width: 100%;
`;

export const Form = styled.View`
  margin-top: 35px;
  width: 100%;
`;

export const InputMargin = styled.View`
  margin-bottom: 10px;
`;

export const ForgotPassword = styled.Text`
  margin: 4px 0 12px;
  text-align: right;
  color: ${primary2};
  font-size: 17px;
  font-family: ${interRegular};
`;
