import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
function Cart() {
    const cart = useContext(CartContext);

    const total = cart.items.reduce((a,b) => a + b.price, 0)

  return (
    <div className='cart'>
    <h2>Cart</h2>
    {
    cart.items && cart.items.map((item)=>(
      <li>{item.name} - ${item.price}</li>
    ))
    }
    <h5>Tota; Bill: ${total}</h5>
    </div>
  )
}

export default Cart