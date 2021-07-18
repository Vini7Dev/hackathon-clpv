import React from 'react';
import { ModalProps, TouchableWithoutFeedback } from 'react-native';

import {
  ModalElement,
  Content,
  Title,
  Message,
} from './styles';

interface IModalView extends ModalProps {
  title: string;
  message: string;
  onCloseModal(): void;
}

const ModalView: React.FC<IModalView> = ({
  title, message, onCloseModal, ...rest
}) => {
  return (
    <ModalElement animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <Content>
          <Title>
            {title}
          </Title>

          <Message>
            {message}
          </Message>
        </Content>
      </TouchableWithoutFeedback>
    </ModalElement>
  );
};

export default ModalView;
