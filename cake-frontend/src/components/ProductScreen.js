import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
  Form,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsDetails } from '../actions/productActions'
import Loader from './Loader'
import Message from './Message'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)

  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductsDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <div>
      <Link
        className='btn btn-light my-4'
        to='/shop'
        style={{
          fontFamily: 'cursive',
          fontSize: '20px',
          borderStyle: 'solid',
          borderBlockStyle: 'solid',
          borderBlockColor: '#78c2ad',
        }}
      >
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row className='my-2'>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h2 style={{ color: '#78c2ad', fontFamily: 'cursive' }}>
                  {product.name}
                </h2>
              </ListGroupItem>
              <ListGroupItem>
                <h2 style={{ fontFamily: 'cursive' }}>
                  Price:€{product.price}
                </h2>
              </ListGroupItem>
              <ListGroupItem>
                <h2
                  style={{
                    fontFamily: 'cursive',
                    fontSize: '24px',
                    textAlign: 'justify',
                  }}
                >
                  Description:- {product.description}
                </h2>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{product.status}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Quantity (Kg): </Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInstock).keys()].map((x) => (
                        <option kex={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Button
                  onClick={addToCartHandler}
                  className='btn-block'
                  type='Button'
                  disabled={product.status === 'Notavailable'}
                  style={{ color: 'black' }}
                >
                  Basket
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default ProductScreen
