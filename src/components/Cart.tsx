import React, { useState } from 'react'

import deleteICO from '../assets/images/icon-delete.svg'
import { CartProps } from './types'

const Cart = ({ isCartOpen, cartItems, setCartItems }: CartProps) => {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
            }}
            className='cart-container'
            style={{ display: isCartOpen ? 'flex' : 'none' }}
        >
            <div className='cart-header-container'>Cart</div>
            <hr></hr>
            <div className='main-cart-container'>
                <div
                    className={`items-container ${
                        cartItems.length === 0 ? 'empty' : ''
                    }`}
                >
                    <div
                        className='empty-container'
                        style={{
                            display: cartItems.length === 0 ? 'block' : 'none',
                        }}
                    >
                        Your cart is empty.
                    </div>
                    {cartItems.map((cartItem, index) => (
                        <div key={index} className='item-container'>
                            <div className='photo-container'>
                                <img src={cartItem.photo} alt='Item photo' />
                            </div>
                            <div className='labels-container'>
                                <div className='top-container'>
                                    {cartItem.title}
                                </div>
                                <div className='bottom-container'>
                                    ${cartItem.price.toFixed(2)} x{' '}
                                    {cartItem.amount}{' '}
                                    <span className='bold-label'>
                                        $
                                        {(
                                            cartItem.amount * cartItem.price
                                        ).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div className='delete-btn-container'>
                                <img
                                    src={deleteICO}
                                    alt='delete icon'
                                    onClick={() => {
                                        setCartItems([])
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className='btn-container'
                    style={{
                        display: cartItems.length === 0 ? 'none' : 'block',
                    }}
                >
                    Checkout
                </div>
            </div>
        </div>
    )
}

export default Cart
