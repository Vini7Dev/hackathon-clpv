import React from 'react';

import {
  TitleText,
} from './styles';

interface ITitle {
  color?: 'primary' | 'alert_light';
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: 40 | 35 | 30;
}

const Title: React.FC<ITitle> = ({
  color = 'primary', textAlign = 'left', fontSize = 40, children,
}) => {
  return (
    <TitleText
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
    >
      {children}
    </TitleText>
  );
};

export default Title;
