import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const {
  text,
  input_border,
  input_icon_background,
} = theme.colors;

const {
  inter_regular,
} = theme.fonts;

export const Container = styled.TouchableOpacity`
  height: 50px;
  max-width: 152px;
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${input_border};
  flex-direction: row;
`;

export const IconView = styled.View`
  width: 45px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${input_icon_background};
  border-right-color: ${input_border};
  border-right-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const InputValue = styled.Text`
  width: 71%;
  color: ${text};
  font-size: 15px;
  font-family: ${inter_regular};
  text-align: center;
`;
