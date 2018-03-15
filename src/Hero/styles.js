import styled, { css } from 'styled-components'

import * as ts from "../Typography/styles.js";
import colorset from '../Colors/colorset.js';
import herobg from '../../assets/dsconf-wide.jpg';


export const Hero = styled.div`
  background: ${colorset.darkblue} url(${herobg});
  color: ${colorset.white};
  text-align: center;
  padding: 50px 10px 50px;
`

export const HeroLogo = styled.img`
  width: 120px;
  padding: 50px 0;
`

export const Th = styled.span`
  vertical-align: super;
  font-size: 70%;
`

export const Title = ts.P.extend`
  color: ${colorset.white};
  padding: 0 0 20px;
  font-size: 30px;
`;

export const SubTitle = ts.P.extend`
  color: ${colorset.white};
  padding: 10px;
  font-size: 20px;
  line-height: 1.7em;
`;

export const P = ts.P.extend`
  color: ${colorset.white};
  padding: 5px;
  font-size: 14px;
`;
