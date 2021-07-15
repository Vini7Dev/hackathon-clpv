import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonText,
} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  text: string;
  hSize?: 'normal' | 'large';
}

const Button: React.FC<IButtonProps> = ({ text, hSize = 'normal', ...rest }) => {
  return (
    <Container
      activeOpacity={0.7}
      hSize={hSize}
      {...rest}
    >
      <ButtonText>
        {text}
      </ButtonText>
    </Container>
  );
};

export default Button;
