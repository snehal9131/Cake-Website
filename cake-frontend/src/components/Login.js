import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Fromcontainer from '../components/Fromcontainer'
import { login } from '../actions/userActions'

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/profile'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <Fromcontainer>
      <h1 className='my-5' style={{ fontFamily: 'cursive', color: '#78c2ad' }}>
        Sign In
      </h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label style={{ fontFamily: 'cursive', fontSize: '20px' }}>
            Email Address
          </Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ fontFamily: 'cursive', fontSize: '20px' }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label style={{ fontFamily: 'cursive', fontSize: '20px' }}>
            Password
          </Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontFamily: 'cursive', fontSize: '20px' }}
          ></Form.Control>
        </Form.Group>

        <Button
          type='submit'
          variant='primary'
          style={{ fontFamily: 'cursive', fontSize: '20px' }}
        >
          Sign In
        </Button>
      </Form>

      <Row className='py-3' style={{ fontFamily: 'cursive', fontSize: '20px' }}>
        <Col>
          New Customer ?
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </Fromcontainer>
  )
}

export default Login
