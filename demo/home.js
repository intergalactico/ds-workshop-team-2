/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Header, Newsletter, TeamMember, Footer } from '../lib/my-awesome-library'

// const st = Section.SectionTypography

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default Home
