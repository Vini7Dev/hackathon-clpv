import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonText,
} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button: React.FC<IButtonProps> = ({ text, ...rest }) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <ButtonText>
        {text}
      </ButtonText>
    </Container>
  );
};

export default Button;
