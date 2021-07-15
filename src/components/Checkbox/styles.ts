import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const {
  text,
  input_border,
} = theme.colors;

const {
  inter_regular,
} = theme.fonts;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

export const Label = styled.Text`
  color: ${text};
  text-align: right;
  font-size: 12px;
  font-family: ${inter_regular};
`;

export const CechboxElement = styled.Pressable`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${input_border};
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;
