import styled, { css } from 'styled-components';
import * as typographyStyles from '../Typography/styles.js';
import colorset from '../Colors/colorset.js';

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 27px;
  padding-bottom: 20px;
  background-color: ${colorset.backgroundgrey}
`

export const Input = styled.input`
  min-height: 28px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 400;
  padding: 14px;
`;

export const Header1 = typographyStyles.Header1.extend`
  margin-bottom: 10px;
`;

export const Paragraph = typographyStyles.P.extend`
  margin-bottom: 14px;
`;
