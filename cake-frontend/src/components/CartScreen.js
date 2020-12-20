import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartAction'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  //remove item from Cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  //redirects to signin
  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      <h1
        className='my-3'
        style={{
          color: '#78c2ad',
          fontFamily: 'cursive',
        }}
      >
        Shopping Cart
      </h1>
      <Row>
        <Col
          md={8}
          style={{
            fontFamily: 'cursive',
          }}
        >
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is Empty!
              <Link
                to='/shop'
                style={{ color: 'black', marginLeft: '20px', fontSize: '19px' }}
              >
                Go Back
              </Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col
                      md={3}
                      style={{
                        fontSize: '25px',
                        marginTop: '50px',
                        textAlign: 'left',
                      }}
                    >
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col
                      md={2}
                      style={{
                        fontSize: '25px',
                        marginTop: '50px',
                        textAlign: 'center',
                      }}
                    >
                      €{item.price * item.qty}
                    </Col>

                    <Col
                      md={2}
                      style={{
                        fontSize: '25px',
                        marginTop: '50px',
                        textAlign: 'center',
                      }}
                    >
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInstock).keys()].map((x) => (
                          <option kex={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <h1
                      style={{
                        fontFamily: 'cursive',
                        fontSize: '17px',
                        marginTop: '60px',
                      }}
                    >
                      Kg
                    </h1>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                        style={{
                          fontSize: '25px',
                          marginTop: '50px',
                          textAlign: 'center',
                        }}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col
          md={4}
          style={{
            fontSize: '21px',
            marginTop: '50px',
            textAlign: 'center',
          }}
        >
          <Card>
            <ListGroup>
              <ListGroupItem>
                <h2 style={{ fontFamily: 'cursive', color: '#E98272' }}>
                  Carts Total...
                </h2>
              </ListGroupItem>
              <ListGroupItem style={{ fontFamily: 'cursive' }}>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </ListGroupItem>
              <ListGroupItem>
                €
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                  style={{
                    fontFamily: 'cursive',
                    fontSize: '25px',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Proceed to Checkout
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CartScreen
