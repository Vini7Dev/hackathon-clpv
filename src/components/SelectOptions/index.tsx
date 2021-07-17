import React from 'react';

import {
  Container, SubContainer, ItemText, ItemView, NoResultText, NoResultView,
} from './styles';

export interface IOptionData {
  id: string;
  label: string;
  value: string;
  coords: {
    lat: number;
    long: number;
  };
}

interface ISelectOptions {
  options: IOptionData[];
  onSelectOption(address: IOptionData): void;
  onClose(): void;
}

const SelectOptions: React.FC<ISelectOptions> = ({
  options = [],
  onSelectOption,
  onClose,
}) => {
  return (
    <Container>
      <SubContainer>
        {
          options.length
            ? options.map((item) => {
              return (
                <ItemView
                  key={item.id}
                  activeOpacity={0.5}
                  onPress={() => onSelectOption(item)}
                >
                  <ItemText>{item.label}</ItemText>
                </ItemView>
              );
            })
            : (
              <NoResultView activeOpacity={0.5} onPress={() => onClose()}>
                <NoResultText>Endereço não encontrado...</NoResultText>
              </NoResultView>
            )
        }
      </SubContainer>
    </Container>
  );
};

export default SelectOptions;
