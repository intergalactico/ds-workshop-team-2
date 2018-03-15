/*
 * The form for signing up for the newsletter.
 */

import React from 'react'

import Button from '../Button';

import * as styles from './styles.js'
import * as typography from '../Typography/styles.js'
import colorset from '../Colors/colorset.js'


const Newsletter = () => {
  console.log(colorset);
  return (
    <styles.Newsletter>
      <typography.Header1>Stay up to date</typography.Header1>
      <typography.P>We will use the information you provided to share with you the information on when the tickets launch, and critical updates about the event.</typography.P>
      <input></input>
      <input></input>
      <Button
        label='SUBSCRIBE'
        color={colorset.white}
        textColor={colorset.white}>
      </Button>
    </styles.Newsletter>
  )
}

export default Newsletter
