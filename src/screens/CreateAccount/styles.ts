import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  alert_dark,
  primary2,
} = theme.colors;

export const Container = styled.ScrollView`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 30px 60px;
  margin: 0;
`;

export const Content = styled.View`
  align-items: center;
  padding-bottom: 100px;
`;

export const TitleView = styled.View`
  width: 100%;
`;

export const AlertView = styled.View`
  flex-direction: row;
`;

export const AlertText = styled.Text`
  color: ${alert_dark};
  font-size: 12px;
  line-height: 13px;
  margin-left: 4px;
  margin-right: auto;
`;

export const Form = styled.View`
  margin-top: 35px;
  width: 100%;
`;

export const InputGroupTitle = styled.Text`
  color: ${primary2};
  font-size: 18px;
`;

export const InputMargin = styled.View`
  margin-bottom: 10px;
`;

export const ButtonMargin = styled.View`
  margin-top: 20px;
`;

export const PrimaryColorText = styled.Text`
  color: ${primary2};
`;
