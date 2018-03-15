import React from 'react'

import * as styles from './styles.js'
import logo from '../../assets/dsconf-logo-small.png';

import Icon from '../Icon'
import colorset from '../Colors/colorset.js'

const Header = () => {
  return (
    <styles.Header>
      <styles.SpaceBetween>
        <div>
          <styles.Logo src={logo}></styles.Logo>
        </div>
        <Icon name='bars' color={colorset.white}></Icon>
      </styles.SpaceBetween>
    </styles.Header>
  )
}

export default Header
