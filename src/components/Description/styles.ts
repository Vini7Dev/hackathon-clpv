import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface IDescription {
  color?: 'text' | 'alert_dark';
  fontSize?: number;
}

const {
  text,
  alert_dark,
} = theme.colors;

const {
  inter_regular,
} = theme.fonts;

export const DescriptionText = styled.Text<IDescription>`
  color: ${(props) => (props.color === 'text' ? text : alert_dark)};
  font-size: ${(props) => props.fontSize}px;
  font-family: ${inter_regular};
`;
