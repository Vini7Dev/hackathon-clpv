import React from 'react';

import {
  DescriptionText,
} from './styles';

interface IDescription {
  color?: 'text' | 'alert_dark' | 'primary2';
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: number;
}

const Description: React.FC<IDescription> = ({
  color = 'text',
  textAlign = 'left',
  fontSize = 20,
  children,
}) => {
  return (
    <DescriptionText
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
    >
      {children}
    </DescriptionText>
  );
};

export default Description;
