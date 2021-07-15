import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const {
  secondary,
} = theme.colors;

const {
  ubuntuMedium,
} = theme.fonts;

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: ${secondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 22px;
  font-family: ${ubuntuMedium};
`;
