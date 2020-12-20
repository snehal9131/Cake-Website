import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not Macth!')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Row>
      <Image
        src='/Cake/cake1.jpg'
        alt='not found'
        width='1200px'
        height='200px'
        className='my-3'
      />
      <Col md={9} style={{ marginLeft: '200px' }}>
        <h2
          className='my-5'
          style={{ fontFamily: 'cursive', color: '#78c2ad' }}
        >
          User Profile
        </h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated!</Message>}

        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label style={{ fontFamily: 'cursive', fontSize: '20px' }}>
              Name
            </Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ fontFamily: 'cursive', fontSize: '20px' }}
            ></Form.Control>
          </Form.Group>

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

          <Form.Group controlId='confirmPassword'>
            <Form.Label style={{ fontFamily: 'cursive', fontSize: '20px' }}>
              Confirm Password
            </Form.Label>
            <Form.Control
              type='password'
              placeholder='Repeat Password'
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              style={{ fontFamily: 'cursive', fontSize: '20px' }}
            ></Form.Control>
          </Form.Group>

          <Button
            type='submit'
            variant='primary'
            style={{ fontFamily: 'cursive', fontSize: '20px' }}
          >
            Update
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default ProfileScreen
