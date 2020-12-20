import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Fromcontainer from '../components/Fromcontainer'
import { savePaymentMethod } from '../actions/cartAction'
import CheckoutSteps from '../components/checkoutSteps'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <>
      <img
        src='/Cake/para.jpg'
        alt='not found'
        width='1200px'
        height='200px'
        className='my-3'
      />
      <Fromcontainer>
        <CheckoutSteps step1 step2 step3 />
        <h2 style={{ fontFamily: 'cursive', color: '#E98272' }}>
          Payment Details
        </h2>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label
              as='legend'
              className='my-3'
              style={{ marginLeft: '10px' }}
            >
              Select Method
            </Form.Label>

            <Col>
              <Form.Check
                type='radio'
                label='Paypal or Credit Card'
                id='Paypal'
                name='paymentMethod'
                value='Paypal'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
                className='my-3'
                style={{ fontFamily: 'cursive', marginLeft: '80px' }}
              ></Form.Check>

              <Form.Check
                type='radio'
                label='klarna'
                id='klarna'
                name='paymentMethod'
                value='klarna'
                onChange={(e) => setPaymentMethod(e.target.value)}
                className='my-3'
                style={{ fontFamily: 'cursive', marginRight: '20px' }}
              ></Form.Check>
            </Col>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </Fromcontainer>
    </>
  )
}

export default PaymentScreen
