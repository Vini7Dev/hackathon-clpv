import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface IDescription {
  color: 'text' | 'alert_dark' | 'primary2';
  textAlign: 'left' | 'center' | 'right';
  fontSize: number;
}

const {
  text,
  alert_dark,
  primary2,
} = theme.colors;

const {
  inter_regular,
} = theme.fonts;

export const DescriptionText = styled.Text<IDescription>`
  color: ${(props) => {
    switch (props.color) {
      case 'text':
        return text;
      case 'alert_dark':
        return alert_dark;
      case 'primary2':
        return primary2;
      default:
        return text;
    }
  }};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize}px;
  font-family: ${inter_regular};
`;
