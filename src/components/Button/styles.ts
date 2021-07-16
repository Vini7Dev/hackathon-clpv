import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface IButton {
  hSize: 'normal' | 'large';
}

const {
  secondary,
} = theme.colors;

const {
  ubuntu_medium,
} = theme.fonts;

export const Container = styled.TouchableOpacity<IButton>`
  width: 100%;
  height: ${(props) => (props.hSize === 'normal' ? 55 : 72)}px;
  background-color: ${secondary};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 22px;
  font-family: ${ubuntu_medium};
`;
