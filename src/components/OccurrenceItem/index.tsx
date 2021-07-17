import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ItemHeaderRow,
  HeaderTitle,
  ItemBodyRow,
  BodyText,
} from './styles';

interface IOccurrenceItem extends TouchableOpacityProps {
  code: string;
  status: string;
  infraction_notice: string;
}

const OccurrenceItem: React.FC<IOccurrenceItem> = ({
  code,
  status,
  infraction_notice,
  ...rest
}) => {
  return (
    <Container activeOpacity={0.8} {...rest}>
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
          {code}
        </BodyText>
        <BodyText style={{ flex: 2 }}>
          {status}
        </BodyText>
        <BodyText style={{ flex: 1 }}>
          {infraction_notice}
        </BodyText>
      </ItemBodyRow>
    </Container>
  );
};

export default OccurrenceItem;
