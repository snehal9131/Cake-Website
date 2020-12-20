import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payOrder } from '../actions/orderActions'
import { PayPalButton } from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from '../constants/orderConstants'

const OrderScreen = ({ match }) => {
  const orderId = match.params.id

  const [sdkReady, setsdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { success: successPay, loading: loadingPay } = orderPay

  if (!loading) {
    //Calculate Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setsdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setsdkReady(true)
      }
    }
  }, [order, orderId, dispatch, successPay])

  const successPamentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h3 className='my-3'>Order {order._id}</h3>
      <Row>
        <Col md={8}>
          <ListGroup>
            <ListGroup.Item>
              <h2
                style={{
                  alignContent: 'center',
                  color: '#E98272',
                  fontFamily: 'cursive',
                }}
              >
                Shipping
              </h2>
              <strong>Name: </strong> {order.user.name}
              <strong style={{ marginLeft: '20px' }}>Email: </strong>
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              <br />
              <strong>Address:</strong>
              {order.shippingAddress.address},{order.shippingAddress.city},
              {order.shippingAddress.postalCode},{order.shippingAddress.country}
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='primary'>Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2 style={{ color: '#E98272', fontFamily: 'cursive' }}>
                Payment Method
              </h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='primary'>Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2 style={{ color: '#E98272', fontFamily: 'cursive' }}>
                Order Items
              </h2>
              {order.orderItems.length === 0 ? (
                <Message style={{ color: '#E98272', fontFamily: 'cursive' }}>
                  Order is Empty...
                </Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col
                          style={{ fontFamily: 'cursive', fontSize: '20px' }}
                        >
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x €{item.price} = €{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card className='my-3'>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2 style={{ fontFamily: 'cursive', color: '#E98272' }}>
                  Order Summery
                </h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ fontFamily: 'cursive', fontSize: '20px' }}>
                  <Col>Items</Col>
                  <Col>€{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ fontFamily: 'cursive', fontSize: '20px' }}>
                  <Col>Shipping</Col>
                  <Col>€{order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ fontFamily: 'cursive', fontSize: '20px' }}>
                  <Col>Tax</Col>
                  <Col>€{order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ fontFamily: 'cursive', fontSize: '20px' }}>
                  <Col>Total</Col>
                  <Col>€{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPamentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen
