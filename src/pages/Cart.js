import React from 'react'
import "../../src/index.css"
import {remove} from '../store/CartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart)

  const handleRemove = (productId) =>{
    dispatch(remove(productId))
  }
  return (
    <div className='cartWrapper'>
      {
      data.map((product)=>{
        return <div className='cartCard'> 
        <img src={product.image} alt='imaeg' />
        <h5> {product.title}</h5>
        <h4> {product.price}</h4>
        <button className='btn' onClick={() => handleRemove(product.id)}> Remove</button>
        </div>
      })
      }
    </div>
  )
}

export default Cart
