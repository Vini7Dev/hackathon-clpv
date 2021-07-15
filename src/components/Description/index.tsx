import React from 'react';

import {
  DescriptionText,
} from './styles';

const Description: React.FC = ({ children }) => {
  return (
    <DescriptionText>
      {children}
    </DescriptionText>
  );
};

export default Description;
