import React from 'react'
import DemoCarousel from './HomeElements'
import { ColoredLine } from './HomeElements'
import Services from './Services'
import Team from './Team'
import './Home.css'

const Home = () => {
  return (
    <div className='my-2'>
      <DemoCarousel />
      <br />
      <ColoredLine color='#78c2ad' />
      <br /> <br />
      <h1>Our Services</h1> <br />
      <Services /> <br />
      <ColoredLine color='#78c2ad' />
      <br /> <br />
      <h1>Our Team</h1> <br />
      <Team /> <br /> <br /> <br /> <br />
    </div>
  )
}

export default Home
