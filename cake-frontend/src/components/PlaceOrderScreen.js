import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/checkoutSteps'
import { createOrder } from '../actions/orderActions'

const PlaceOrderScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  //Calculate Prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)

  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.taxPrice) +
    Number(cart.shippingPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <div className='my-5'>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='legend'>
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
              <strong>Address:</strong>
              {cart.shippingAddress.address},{cart.shippingAddress.city},
              {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2 style={{ color: '#E98272', fontFamily: 'cursive' }}>
                Payment Method
              </h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2 style={{ color: '#E98272', fontFamily: 'cursive' }}>
                Order Items
              </h2>
              {cart.cartItems.length === 0 ? (
                <Message style={{ color: '#E98272', fontFamily: 'cursive' }}>
                  Your Cart is Empty...
                </Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
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
                  <Col>€{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ fontFamily: 'cursive', fontSize: '20px' }}>
                  <Col>Shipping</Col>
                  <Col>€{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ fontFamily: 'cursive', fontSize: '20px' }}>
                  <Col>Tax</Col>
                  <Col>€{cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ fontFamily: 'cursive', fontSize: '20px' }}>
                  <Col>Total</Col>
                  <Col>€{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                  style={{ fontFamily: 'cursive', fontSize: '20px' }}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrderScreen
