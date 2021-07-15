import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const {
  primary,
} = theme.colors;

const {
  ubuntuMedium,
} = theme.fonts;

export const TitleText = styled.Text`
  width: 100%;
  color: ${primary};
  font-size: 40px;
  font-family: ${ubuntuMedium};
`;
