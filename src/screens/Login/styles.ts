import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  primary,
  subtitle,
  text,
} = theme.colors;

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 60px 30px 0;
  margin: 0;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Logo = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: #C4C4C4;
`;

export const TitleView = styled.View``;

export const Title = styled.Text`
  color: ${primary};
  font-size: 40px;
`;

export const Subtitle = styled.Text`
  color: ${text};
  font-size: 20px;
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
  color: ${subtitle};
  font-size: 17px;
`;
