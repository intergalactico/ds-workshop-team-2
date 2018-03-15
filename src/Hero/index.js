import React from 'react'

import logo from '../../assets/dsconf-logo.png';
import Button from '../Button';

import * as s from './styles.js'

/**
 * 14th text etc. has a raised text snippet
 * @param {*} props 
 */
const Th = () => {
  return (
    <s.Th>
      th
    </s.Th>
  )
}

/**
 * <Hero /> component
 */
const Hero = () => {
  return (
    <s.Hero>
      <s.HeroLogo src={logo} alt="DSConf logo" />
      <s.Title>
        A DESIGN SYSTEMS CONFERENCE
      </s.Title>
      <s.SubTitle>
        MARCH 14<Th /> – 15<Th />, 2018<br />
        IN HELSINKI, FINLAND
      </s.SubTitle>
      <Button color="#1b8ceb" textColor="#fff">
        Workshop tickets
      </Button>
    </s.Hero>
  )
}

export default Hero
