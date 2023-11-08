import React from 'react'
import Products from '../components/Products'
const Home = () => {
  return (
    <div>
      <h2 className=''>welcome to the redux toolkit store  </h2>
      <section>
        <h3 className='heading'> Products List </h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home
