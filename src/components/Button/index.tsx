import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ButtonText,
} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  text: string;
  hSize?: 'normal' | 'large';
  icon?: string;
}

const Button: React.FC<IButtonProps> = ({
  text, hSize = 'normal', icon, ...rest
}) => {
  return (
    <Container
      activeOpacity={0.7}
      hSize={hSize}
      {...rest}
    >
      { icon && <Icon name={icon} color="#FFFFFF" size={24} style={{ marginRight: 5 }} />}

      <ButtonText>
        {text}
      </ButtonText>
    </Container>
  );
};

export default Button;
