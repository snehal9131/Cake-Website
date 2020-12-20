import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import './App.css'
import Gallery from './components/Gallery'
import Blog from './components/Blog/Blog'
import Shop from './components/Shop'
import CartScreen from './components/CartScreen'
import Login from './components/Login'
import ProductScreen from './components/ProductScreen'
import RegisterScreen from './components/RegisterScreen'
import ProfileScreen from './components/ProfileScreen'
import ShippingScreen from './components/ShippingScreen'
import PaymentScreen from './components/PaymentScreen'
import PlaceOrderScreen from './components/PlaceOrderScreen'
import OrderScreen from './components/OrderScreen'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Container>
            <Route exact path='/' component={Home} />
            <Route path='/Gallery' component={Gallery} />
            <Route path='/Blog' component={Blog} />
            <Route path='/Shop' component={Shop} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/order/:id' component={OrderScreen} />
          </Container>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App
