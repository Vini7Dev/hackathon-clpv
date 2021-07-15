import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

interface ITitle {
  textAlign?: 'left' | 'center' | 'right';
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
  font-size: 40px;
  font-family: ${ubuntu_medium};
  text-align: ${(props) => props.textAlign};
`;
