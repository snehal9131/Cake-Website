import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar
        bg='dark'
        expand='lg'
        collapseOnSelect
        style={{ fontFamily: 'cursive', fontSize: '24px' }}
      >
        <Navbar.Brand href='/' style={{ fontSize: '30px', marginLeft: '60px' }}>
          Eats&Treats
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/gallery'>
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/blog'>
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/shop'>
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile' style={{ fontFamily: 'cursive' }}>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item
                  onClick={logoutHandler}
                  style={{ fontFamily: 'cursive' }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>SignIn
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
