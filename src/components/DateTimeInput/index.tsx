import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker, { BaseProps } from '@react-native-community/datetimepicker';

import theme from '../../global/styles/theme';
import {
  Container,
  IconView,
  InputValue,
} from './styles';

interface IDateTimeInputProps extends BaseProps {
  iconName: string;
  valueText: string;
  mode?: 'date' | 'time';
  onChangeValue(e: Event): void;
}

const { text } = theme.colors;

const DateTimeInput: React.FC<IDateTimeInputProps> = ({
  iconName, valueText, mode = 'date', value, onChangeValue, ...rest
}) => {
  const [show, setShow] = useState(false);

  const toggleOpenDateTimePicker = useCallback((e) => {
    setShow(!show);

    onChangeValue(e);
  }, [show, onChangeValue]);

  return (
    <Container activeOpacity={0.5} onPress={toggleOpenDateTimePicker}>
      <IconView>
        <Icon name={iconName} color={text} size={20} />
      </IconView>

      <InputValue style={{ textAlignVertical: 'center' }}>
        {valueText}
      </InputValue>

      {
        show && (
          <DateTimePicker
            value={value}
            onChange={toggleOpenDateTimePicker}
            mode={mode}
            maximumDate={new Date()}
            {...rest}
          />
        )
      }
    </Container>
  );
};

export default DateTimeInput;
