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
  position: absolute;
  top: 50px;
  width: 100%;
  z-index: 1;
`;

export const SubContainer = styled.View`
  background-color: #FFFFFF;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${input_border};
`;

export const ItemView = styled.TouchableOpacity`
  background-color: white;
  height: 50px;
  width: 100%;
  justify-content: center;
  border-radius: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${input_border};
`;

export const ItemText = styled.Text`
  color: ${text};
  font-family: ${inter_regular};
  padding-left: 10px;
  padding-right: 10px;
`;

export const NoResultView = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${input_border};
  background-color: white;
`;

export const NoResultText = styled.Text`
  color: ${text};
  font-family: ${inter_regular};
  font-size: 18px;
`;
