import React from 'react'
import { storiesOf } from '@storybook/react'

import Newsletter from '.'

storiesOf('Newsletter', module)
  .add('index', () => (
    <Newsletter />
  ))
