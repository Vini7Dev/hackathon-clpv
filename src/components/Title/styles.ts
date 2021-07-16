import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface ITitle {
  color: 'primary' | 'alert_light';
  textAlign: 'left' | 'center' | 'right';
  fontSize: 40 | 35 | 30;
}

const {
  primary,
  alert_light,
} = theme.colors;

const {
  ubuntu_medium,
} = theme.fonts;

export const TitleText = styled.Text<ITitle>`
  width: 100%;
  color: ${(props) => (props.color === 'primary' ? primary : alert_light)};
  font-family: ${ubuntu_medium};
  font-size: ${(props) => props.fontSize}px;
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => (props.fontSize === 40 ? 38 : 28)}px;
`;
