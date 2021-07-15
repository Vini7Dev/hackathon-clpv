import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface ITitle {
  textAlign: 'left' | 'center' | 'right';
  fontSize: 40 | 30;
}

const {
  primary,
} = theme.colors;

const {
  ubuntu_medium,
} = theme.fonts;

export const TitleText = styled.Text<ITitle>`
  width: 100%;
  color: ${primary};
  font-family: ${ubuntu_medium};
  font-size: ${(props) => props.fontSize}px;
  text-align: ${(props) => props.textAlign};
`;
