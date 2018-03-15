import styled, { css } from "styled-components";

import * as ts from "../Typography/styles.js";

export const Footer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
`;

// We're extending <ts.P> component with extra styles
export const P = ts.P.extend`
  color: white;
  padding: 15px 0 15px 0;
  font-size: 14px;
`;
