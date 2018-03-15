/*
 * All the button components are using the same styled-component. There is only
 * one file with styles (this one) which is imported into all the button components.
 */

import styled, { css } from 'styled-components';
import { isCircular } from 'styled-utils';

/*
 * In styled-components, you can define functions that output
 * CSS properties. This functions can be called from inside the
 * element declarations.
 */
const isIcon = ({ isIcon }) => {
  if (!isIcon) return;
  return css`
    padding: 0px 0.5em;
    & .icon {
      margin: 0;
    }
  `;
};

/* Default styles for all the buttons */
export const Button = styled.div`
  font-family: lato;
  font-weight: 500px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.0em;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: ${p => p.color};
  border-radius: 3px;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;
  background-color: ${p => p.backgroundColor || 'transparent'};
  color: ${p => p.textColor};
  font-size: 20px;
  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  & .icon {
    margin: 0 5px 0 0;
    font-size: ${p => p.size ? p.size : '1rem'};
  }
  ${isIcon}
  ${isCircular}
`;

/* Styled for a label element inside a button */
export const Label = styled.span`
  margin: 0;
  margin-left: 0.5em;
  padding: 0 1em 0 0.5em;
  display: inline-flex;
  border-radius: 0 3px 3px 0;
  height: ${ () => ('2.40em'.split('em')[0] - 0.1 + 'em')};
  line-height: 2.40em;
  font-size: ${p => p.size ? p.size : '1rem'};
`;
