import React from 'react'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './Home.css'

class DemoCarousel extends React.Component {
  render() {
    return (
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src='/Cake/cupcake-org.jpg' alt='' />
        </div>
        <div>
          <img src='/Cake/cakepiece.jpeg' alt='' />
        </div>
        <div>
          <img src='/Cake/birthdaycake.jpeg' alt='' />
        </div>
        <div>
          <img src='/Cake/cupcake2.jpg' alt='' />
        </div>
      </Carousel>
    )
  }
}
export const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
      //width: 200,
    }}
  />
)

export const HomeContent = styled.div`
    height: calc(100vh -80px);
    max-height:100%
    width: 100vw;
    padding: 0rem calc((100vw -1300px)/2);

`

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 2 rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const HomeH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`

export const HomeBtn = styled.button`
position:
font-size: 1.4rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2s ease-out;
&:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`
export default DemoCarousel
