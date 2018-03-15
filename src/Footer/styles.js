import styled from "styled-components";

import * as ts from "../Typography/styles.js";
import colorset from '../Colors/colorset.js';

export const Footer = styled.div`
  background-color: ${colorset.backgroundgrey};
  color: ${colorset.white};
  text-align: center;
`;

// We're extending <ts.P> component with extra styles
export const P = ts.P.extend`
  color: ${colorset.white};
  padding: 15px 0 15px 0;
  font-size: 14px;
`;
