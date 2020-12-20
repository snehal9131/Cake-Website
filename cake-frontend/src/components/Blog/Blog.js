import React from 'react'
import './Blog.css'
import BlogElements, { BlogContainer } from './BlogElements'

const Blog = () => {
  return (
    <BlogContainer>
      <h1 className='my-3 ' style={{ color: '#E98272', fontFamily: 'cursive' }}>
        ..Stories..
      </h1>
      <BlogElements />
    </BlogContainer>
  )
}

export default Blog
