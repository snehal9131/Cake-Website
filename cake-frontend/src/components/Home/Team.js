import React from 'react'
import './Home.css'

class Team extends React.Component {
  render() {
    return (
      <div class='row-my'>
        <div class='tcolumn'>
          <img
            class='teamimg'
            src='/Cake/baker1.jpeg'
            alt=''
            width='300'
            height='300'
          />
          <h3>Eliza</h3>
          <p>
            I have 10 years of experience in baking. I love to bake cupcakes and
            piping it attractively.
          </p>
        </div>

        <div class='tcolumn'>
          <img
            class='teamimg'
            src='/Cake/baker2.jpg'
            alt=''
            width='300'
            height='300'
          />
          <h3>Robert</h3>
          <p>
            Hello all. I initiated the idea of eats and treats. I worked as a
            pastry chef in Hilton hotel for 5 years and wellversed in making all
            kinds of cake.
          </p>
        </div>
        <div class='tcolumn'>
          <img
            class='teamimg'
            src='/Cake/baker3.jpeg'
            alt=''
            width='300'
            height='300'
          />
          <h3>Rhea</h3>
          <p>
            I joined my friends as a junior chef. I have completed culinary arts
            from the best baking institute B.H.M.S. Switzerland and exceled in
            it. Baking is fun and I keep doing it.
          </p>
        </div>
      </div>
    )
  }
}

export default Team
