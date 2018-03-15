/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Header, Newsletter, TeamMember, Footer, Typography } from '../lib/my-awesome-library'

// const st = Section.SectionTypography

const speakers = [{
    name: 'Nathan Curtis',
    position: 'Co-founder of EightShapes',
    avatar: '/assets/curtis-square-1-1.jpg'
  },
  {
    name: 'Jina Anne',
    position: 'Senior Design Systems Lead at Amazon',
    avatar: '/assets/jina_anne-1.jpg'
  },
  {
    name: 'Hayley Hughes',
    position: 'Design Lead - IBM\'s Design Language',
    avatar: '/assets/hayley_hughes.jpg'
  },
  {
    name: 'Karri Saarinen',
    position: 'Design Lead at Airbnb',
    avatar: '/assets/karri_saarinen-1.jpg'
  }
];

const hosts = [{
    name: 'André Noël Chaker',
    position: 'Public Speaker and Author',
    avatar: '/assets/Andre_Chaker_lowres-ja-rajattu-1.jpg'
  },
  {
    name: 'Angelos Arnis',
    position: 'Product Designer at Elisa (co-host)',
    avatar: '/assets/angelos-branding.jpg'
  }
];

function TeamMemberList(props) {
  const listItems = props.list.map((speaker) =>
    <TeamMember name={speaker.name} position={speaker.position} avatar={speaker.avatar}></TeamMember>
  );
  return listItems;
}

const Home = () => {
  // console.log();
  return (
    <div>
      <Header></Header>
      {
        speakers.map((speaker, index) =>
          <TeamMember key={`speaker${index}`} name={speaker.name} position={speaker.position} avatar={speaker.avatar}></TeamMember>
        )
      }
      {
        hosts.map((speaker, index) =>
          <TeamMember key={`host${index}`} name={speaker.name} position={speaker.position} avatar={speaker.avatar}></TeamMember>
        )
      }
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  )
}

export default Home
