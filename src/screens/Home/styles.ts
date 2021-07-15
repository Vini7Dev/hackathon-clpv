import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  primary,
} = theme.colors;

const {
  inter_medium,
} = theme.fonts;

export const Container = styled.ScrollView`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0 10px 20px;
`;

export const RegisterOccurrenceBtnArea = styled.View`
  width: 100%;
  margin-top: 22px;
`;

export const OccurrencesTableArea = styled.View`
  margin-top: 40px;
`;

export const TotalText = styled.Text`
  color: ${primary};
  font-size: 16px;
  font-family: ${inter_medium};
  text-align: right;
  margin: 12px 0;
`;

export const OccurrencesTable = styled.View``;
