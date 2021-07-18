import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Label,
  CechboxElement,
} from './styles';

interface ICheckbox extends PressableProps {
  isChecked: boolean;
  toggleIsChecked(): void;
  onPressInLabel(): void;
}

const Checkbox: React.FC<ICheckbox> = ({
  isChecked, toggleIsChecked, onPressInLabel, children, ...rest
}) => {
  return (
    <Container>
      <Pressable onPress={onPressInLabel}>
        <Label>
          {children}
        </Label>
      </Pressable>

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
