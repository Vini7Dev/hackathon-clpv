import React from 'react';
import { PressableProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Label,
  CechboxElement,
} from './styles';

interface ICheckbox extends PressableProps {
  isChecked: boolean;
  toggleIsChecked(): void;
}

const Checkbox: React.FC<ICheckbox> = ({
  isChecked, toggleIsChecked, children, ...rest
}) => {
  return (
    <Container>
      <Label>
        {children}
      </Label>

      <CechboxElement onPress={toggleIsChecked} {...rest}>
        {
          isChecked && (
          <Icon name="check" size={29} />
          )
        }
      </CechboxElement>
    </Container>
  );
};

export default Checkbox;
