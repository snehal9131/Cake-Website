import React, { useState } from 'react'
import { Form, Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Fromcontainer from '../components/Fromcontainer'
import { saveShippingAddress } from '../actions/cartAction'
import CheckoutSteps from '../components/checkoutSteps'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <>
      <Image
        src='/Cake/para.jpg'
        alt='not found'
        width='1200px'
        height='200px'
        className='my-3'
      />
      <Fromcontainer>
        <CheckoutSteps step1 step2 />
        <h1 style={{ fontFamily: 'cursive', color: '#E98272' }}>
          Shipping Details
        </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='address'>
            <Form.Label
              style={{ fontFamily: 'cursive', fontSize: '20px' }}
              className='my-3'
            >
              Address
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Address'
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
              style={{ fontFamily: 'cursive', fontSize: '20px' }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='city'>
            <Form.Label style={{ fontFamily: 'cursive', fontSize: '20px' }}>
              City
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter City'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
              style={{ fontFamily: 'cursive', fontSize: '20px' }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='postalCode'>
            <Form.Label style={{ fontFamily: 'cursive', fontSize: '20px' }}>
              Postal Code
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter PostalCode'
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
              style={{ fontFamily: 'cursive', fontSize: '20px' }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='country'>
            <Form.Label style={{ fontFamily: 'cursive', fontSize: '20px' }}>
              Country
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Country'
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
              style={{ fontFamily: 'cursive', fontSize: '20px' }}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </Fromcontainer>
    </>
  )
}

export default ShippingScreen
