import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const {
  primary,
  text,
  input_border2,
} = theme.colors;

const {
  poppins_semiBold,
  inter_medium,
} = theme.fonts;

export const Container = styled.View`
  border-radius: 8px;
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color: #FFFFFF;
  elevation: 5;
`;

export const ItemHeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${input_border2};
`;

export const HeaderTitle = styled.Text`
  color: ${primary};
  font-size: 16px;
  font-family: ${poppins_semiBold};
  text-align: center;
`;

export const ItemBodyRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const BodyText = styled.Text`
  color: ${text};
  font-size: 14px;
  font-family: ${inter_medium};
  text-align: center;
`;
