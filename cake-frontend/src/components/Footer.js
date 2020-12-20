import React from 'react'
import { Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer my-foot text-center'>
      <div className='container'>
        <div className='row'>
          {/*column 1*/}
          <div className='mycol'>
            <h4>Follow Us</h4>
            <hr />
            <img src='/Cake/a.png' alt='not found' className='climg'></img>
          </div>
          {/*column 2*/}
          <div className='mycol'>
            <h4 className='head'>Contact Us</h4>
            <hr />
            <ul className='list-unstyled'>
              <li>Eats and Treats Cake Provider</li>
              <li>Ludwig-Guttmann-Straße 6</li>
              <li> Tel: +49 6221 88-1000</li>
              <li> Mail: info@eatsandtreats.de</li>
            </ul>
          </div>
        </div>
      </div>
      <Col
        className='text-center py-3'
        style={{ fontFamily: 'cursive', fontSize: '20px' }}
      >
        Copyright &copy; Cake Website
      </Col>
    </footer>
  )
}

export default Footer
