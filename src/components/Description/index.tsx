import React from 'react';

import {
  DescriptionText,
} from './styles';

interface IDescription {
  color?: 'text' | 'alert_dark';
  fontSize?: number;
}

const Description: React.FC<IDescription> = ({
  color = 'text',
  fontSize = 20,
  children,
}) => {
  return (
    <DescriptionText
      color={color}
      fontSize={fontSize}
    >
      {children}
    </DescriptionText>
  );
};

export default Description;
