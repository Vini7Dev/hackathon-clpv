import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonText,
} from './styles';

const Button: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <ButtonText>
        Entrar
      </ButtonText>
    </Container>
  );
};

export default Button;
