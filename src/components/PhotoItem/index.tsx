import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Photo,
  RemoveButton,
} from './styles';

interface IPhotoItem {
  index: number;
  uri: string;
  onDelete(index: number): void;
}

const PhotoItem: React.FC<IPhotoItem> = ({ index, uri, onDelete }) => {
  return (
    <Container>
      <Photo source={{ uri }} />

      <RemoveButton activeOpacity={0.9} onPress={() => onDelete(index)}>
        <Icon name="x" color="#FFFFFF" size={35} />
      </RemoveButton>
    </Container>
  );
};

export default PhotoItem;
