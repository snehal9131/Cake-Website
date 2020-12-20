import React from 'react'
import './Home.css'

class Services extends React.Component {
  render() {
    return (
      <div class='row-my'>
        <div class='column' padding-left='70px'>
          <img
            class='servimg'
            src='/Cake/cupcake.png'
            alt=''
            width='70'
            height='70'
            align='left'
          />
          <h4>Best cakes</h4>
          <p className='mypara'>
            We make all the cakes with fresh and best quality ingriedents. The
            taste and quality are the top priority.
          </p>
        </div>

        <div class='column'>
          <img
            class='servimg'
            src='/Cake/recipe-book.png'
            alt=''
            width='70'
            height='70'
            align='left'
          />
          <h4>Awesome recipes</h4>
          <p className='mypara'>
            We provide the delicious recipes to try at home and make evenings
            special. Stay with us to know easy recipes.
          </p>
        </div>
        <div class='column'>
          <img
            class='servimg'
            src='/Cake/food-delivery.png'
            alt=''
            width='70'
            height='70'
            align='left'
          />
          <h4>Home delivery</h4>
          <p className='mypara'>
            Place your order online and wait for us to get the party started.
            All covid-19 regulations followed. Stay safe at home and enjoy every
            occasion{' '}
          </p>
        </div>
      </div>
    )
  }
}

export default Services
