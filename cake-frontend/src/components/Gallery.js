import React from 'react'
import { Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

const Gallery = () => {
  return (
    <>
      <h3 style={{ color: '#78c2ad', fontFamily: 'cursive', fontSize: '35px' }}>
        ..Portfolio..
      </h3>
      <Card className='my-3 rounded'>
        <Row>
          <Col md={3}>
            <Card.Img src={'/Cake/c1.jpg'} variant='top' height='400px' />
            <Card.Img
              src={'/Cake/c2.jpg'}
              variant='top'
              className='my-2'
              height='400px'
            />
            <Card.Img
              src={'/Cake/c17.jpg'}
              variant='top'
              height='400px'
              className='my-2'
            />
          </Col>

          <Col md={3}>
            <Card.Img src={'/Cake/c4.jpg'} variant='top' height='400px' />
            <Card.Img
              src={'/Cake/c5.jpg'}
              variant='top'
              className='my-2'
              height='400px'
            />
            <Card.Img
              src={'/Cake/c6.jpg'}
              variant='top'
              height='400px'
              className='my-2'
            />
          </Col>

          <Col md={3}>
            <Card.Img src={'/Cake/c7.jpg'} variant='top' height='400px' />
            <Card.Img
              src={'/Cake/c8.jpg'}
              variant='top'
              className='my-2'
              height='400px'
            />
            <Card.Img
              src={'/Cake/c9.jpg'}
              variant='top'
              height='400px'
              className='my-2'
            />
          </Col>

          <Col md={3}>
            <Card.Img src={'/Cake/c13.jpg'} variant='top' height='400px' />
            <Card.Img
              src={'/Cake/c15.jpg'}
              variant='top'
              className='my-2'
              height='400px'
            />
            <Card.Img
              src={'/Cake/c12.jpg'}
              variant='top'
              height='400px'
              className='my-2'
            />
          </Col>

          <Col md={3}>
            <Card.Img src={'/Cake/c18.jpg'} variant='top' height='400px' />
            <Card.Img
              src={'/Cake/c19.jpg'}
              variant='top'
              className='my-2'
              height='400px'
            />
            <Card.Img
              src={'/Cake/c20.jpg'}
              variant='top'
              height='400px'
              className='my-2'
            />
          </Col>
          <Col md={3}>
            <Card.Img src={'/Cake/c21.jpg'} variant='top' height='400px' />
            <Card.Img
              src={'/Cake/c22.jpeg'}
              variant='top'
              className='my-2'
              height='400px'
            />
            <Card.Img
              src={'/Cake/c23.jpg'}
              variant='top'
              height='400px'
              className='my-2'
            />
          </Col>
          <Col md={3}>
            <Card.Img src={'/Cake/c24.jpg'} variant='top' height='400px' />
            <Card.Img
              src={'/Cake/c25.jpg'}
              variant='top'
              className='my-2'
              height='400px'
            />
            <Card.Img
              src={'/Cake/c26.jpg'}
              variant='top'
              height='400px'
              className='my-2'
            />
          </Col>
          <Col md={3}>
            <Card.Img src={'/Cake/c27.jpg'} variant='top' height='400px' />
            <Card.Img
              src={'/Cake/c28.jpg'}
              variant='top'
              className='my-2'
              height='400px'
            />
            <Card.Img
              src={'/Cake/c29.jpg'}
              variant='top'
              height='400px'
              className='my-2'
            />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Gallery
