import React from 'react'
import { storiesOf } from '@storybook/react'

import Logos from '.'

storiesOf('Logos', module)
  .add('index', () => (
    <Logos />
  ))

import sponsorlogo from '../../assets/avatar.jpg';