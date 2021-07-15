import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const {
  text,
} = theme.colors;

const {
  inter_regular,
} = theme.fonts;

export const DescriptionText = styled.Text`
  color: ${text};
  font-size: 20px;
  font-family: ${inter_regular};
`;
