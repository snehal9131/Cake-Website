import React, { useEffect } from 'react'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const Shop = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1 className='my-3 ' style={{ color: '#E98272', fontFamily: 'cursive' }}>
        ..Products List..
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Shop
