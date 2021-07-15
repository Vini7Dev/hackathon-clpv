import React from 'react';

import {
  Container,
  ItemHeaderRow,
  HeaderTitle,
  ItemBodyRow,
  BodyText,
} from './styles';

const OccurrenceItem: React.FC = () => {
  return (
    <Container>
      <ItemHeaderRow>
        <HeaderTitle style={{ flex: 1 }}>
          Código
        </HeaderTitle>
        <HeaderTitle style={{ flex: 2 }}>
          Status
        </HeaderTitle>
        <HeaderTitle style={{ flex: 1 }}>
          Auto de Infração
        </HeaderTitle>
      </ItemHeaderRow>

      <ItemBodyRow>
        <BodyText style={{ flex: 1 }}>
          #003
        </BodyText>
        <BodyText style={{ flex: 2 }}>
          Registro do auto de infração - AI
        </BodyText>
        <BodyText style={{ flex: 1 }}>
          003
        </BodyText>
      </ItemBodyRow>
    </Container>
  );
};

export default OccurrenceItem;
