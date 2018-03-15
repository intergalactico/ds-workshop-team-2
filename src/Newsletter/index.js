/*
 * The form for signing up for the newsletter.
 */

import React from 'react'

import Button from '../Button';

import * as styles from './styles.js'
import * as typography from '../Typography/styles.js'
import colorset from '../Colors/colorset.js'


const Newsletter = () => {
  return (
    <styles.Newsletter>
      <styles.Header1 color={colorset.white}>Stay up to date</styles.Header1>
      <styles.Paragraph color={colorset.white}>We will use the information you provided to share with you the information on when the tickets launch, and critical updates about the event.</styles.Paragraph>
      <styles.Input placeholder='Name'></styles.Input>
      <styles.Input placeholder='Email'></styles.Input>
      <Button
        label='SUBSCRIBE'
        color={colorset.white}
        textColor={colorset.white}>
      </Button>
    </styles.Newsletter>
  )
}

export default Newsletter
