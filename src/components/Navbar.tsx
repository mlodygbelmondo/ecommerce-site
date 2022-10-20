import React, { useContext, useState, useEffect } from 'react'
import logoSVG from '../assets/images/logo.svg'
import cartICON from '../assets/images/icon-cart.svg'
import avatarPNG from '../assets/images/image-avatar.png'
import { Cart } from './'
import { AppContext } from '../App'
import { NavbarProps, AppContextInterface } from './types'

const Navbar = ({
    setIsSidebarOpen,
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
}: NavbarProps) => {
    const { isItemAddedToCart, setIsItemAddedToCart }: AppContextInterface =
        useContext(AppContext)

    return (
        <nav>
            <div className='left-container'>
                <div className='brand-container'>
                    <img src={logoSVG} alt='Brand Logo' />
                    <div
                        className='hamburger-container'
                        onClick={() => {
                            setIsSidebarOpen(true)
                        }}
                    >
                        <div className='hamburger-bar'></div>
                        <div className='hamburger-bar'></div>
                        <div className='hamburger-bar'></div>
                    </div>
                </div>
                <div className='links-container'>
                    <p>Collections</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className='right-container'>
                <button
                    id='cart'
                    className='img-container cart'
                    onClick={() => {
                        isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true)
                        setIsItemAddedToCart(false)
                    }}
                    onBlur={() => {
                        setIsCartOpen(false)
                    }}
                >
                    <img src={cartICON} alt='Cart Image' className='cart-img' />
                    <Cart
                        isCartOpen={isCartOpen}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                    <div
                        className={`notification-container ${
                            isItemAddedToCart ? 'active' : ''
                        }`}
                    ></div>
                </button>
                <div className='img-container avatar'>
                    <img
                        src={avatarPNG}
                        alt='Avatar Image'
                        className='avatar-img'
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
