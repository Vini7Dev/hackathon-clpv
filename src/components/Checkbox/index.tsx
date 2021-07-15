import React from 'react';
import { PressableProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Label,
  CechboxElement,
} from './styles';

const Checkbox: React.FC<PressableProps> = ({ children, ...rest }) => {
  return (
    <Container>
      <Label>
        {children}
      </Label>

      <CechboxElement {...rest}>
        <Icon name="check" size={29} />
      </CechboxElement>
    </Container>
  );
};

export default Checkbox;
