import React, { useEffect, useState } from 'react'
import "./Cart.scss"

function Cart({cart, count, updateCart}) {

  const increaseCount = (cartIndex) => {
    const _CART = cart.map((item, index) => {
      return cartIndex === index ? { ...item, quantity: item.quantity + 1} : item
    })
    updateCart(_CART)
  }

  const decreaseCount = (cartIndex) => {
    const _CART = cart.map((item, index) => {
      return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
    })
    
    updateCart(_CART)
  }

  return (
    <div className='cart-item-wrap container'>
      { count > 0 ? 
      <div>
        {
          cart.map((cartItem,cartIndex) => {
            return(
              <div key={cartIndex} className='cart-item'>
                <img 
                  className='cart-item__icon'
                  src={cartItem.thumbnail} 
                  alt={cartItem.title} 
                />
                <p>{cartItem.title}</p>
                <div className='cart-item__quantity-wrap'>
                  <button onClick={() => decreaseCount(cartIndex)}>-</button>
                  <p className='cart-item__quantity'>
                    {cartItem.quantity}
                  </p>
                  <button onClick={() => increaseCount(cartIndex)}>+</button>
                </div>
                <p>Rs. {cartItem.price * cartItem.quantity}</p>

              </div>
            )
          })
        }
        <p style={{textAlign: 'right'}} >Total: <span></span>
          {
            cart.map(item => item.price * item.quantity).reduce((total,value) => total + value, 0)
          }
        </p>        
      </div>
      : <p>Your cart is empty</p> }
    </div>
  )
}

export default Cart