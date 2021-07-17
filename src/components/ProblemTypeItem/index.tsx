import React from 'react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

import {
  Cotainer,
  Image,
  Description,
} from './styles';

interface IProblemTypeItem extends TouchableOpacityProps {
  image: ImageSourcePropType;
  description: string;
}

const ProblemTypeItem: React.FC<IProblemTypeItem> = ({ image, description, ...rest }) => {
  return (
    <Cotainer activeOpacity={0.8} {...rest}>
      <Image source={image} />
      <Description>
        {description}
      </Description>
    </Cotainer>
  );
};

export default ProblemTypeItem;
