import React from 'react'
import styled from 'styled-components'
import './Blog.css'

class BlogElements extends React.Component {
  render() {
    return (
      <div>
        <div class='brow'>
          <img
            class='bimg'
            src='/Cake/weddingcake1.jpeg'
            alt=''
            width='300'
            height='300'
            align='left'
          />
          <div class='bcolumn'>
            <h4 class='bhead'>Our recent wedding cake for the lovely couple</h4>

            <p class='bpara'>
              Its a blackforest cake which has multiple 4 layers of chocolate
              sponge cake, cherries, and whipped cream. Fresh Kirschwasser
              (cherry schnapps) is used to flavor the whipped cream.{' '}
            </p>
          </div>
        </div>

        <div class='brow'>
          <div class='bcolumn'>
            <h4
              class='bhead'
              style={{ textAlign: 'right', marginRight: '30px' }}
            >
              Cupcakes of the week
            </h4>
            <p
              class='bpara'
              style={{ textAlign: 'right', marginRight: '30px' }}
            >
              {' '}
              Cupcakes bring joy into the house. Begin any good moment with
              cupcakes. It might bring fortune ;){' '}
            </p>
          </div>
          <img
            class='bimg'
            src='/Cake/Blog2.jpeg'
            alt=''
            width='300'
            height='300'
            align='right'
          />
        </div>
        <div class='brow'>
          <img
            class='bimg'
            src='/Cake/Blog3.jpeg'
            alt=''
            width='300'
            height='300'
            align='left'
          />
          <div class='bcolumn'>
            <h4 class='bhead'>It has began to look a lot like Christmas!</h4>
            <p class='bpara'>
              Our Christmas themed cakes are ready for delivery. Place your
              order before its late.{' '}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export const BlogContainer = styled.div`
  background-color: transparent;

  background-position: center;
  align-items: center;
  background-size: cover;
`

export default BlogElements
