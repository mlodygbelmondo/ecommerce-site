import React, { useState, useContext } from 'react'

import img1small from '../assets/images/image-product-1-thumbnail.jpg'
import img2small from '../assets/images/image-product-2-thumbnail.jpg'
import img3small from '../assets/images/image-product-3-thumbnail.jpg'
import img4small from '../assets/images/image-product-4-thumbnail.jpg'
import img1big from '../assets/images/image-product-1.jpg'
import img2big from '../assets/images/image-product-2.jpg'
import img3big from '../assets/images/image-product-3.jpg'
import img4big from '../assets/images/image-product-4.jpg'

import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import cartICON from '../assets/images/icon-cart.svg'

import leftArrow from '../assets/images/icon-previous.svg'
import rightArrow from '../assets/images/icon-next.svg'
import { AppContext } from '../App'
import { Photo, HomepageProps, AppContextInterface } from './types'

const Homepage = ({
    cartItems,
    setCartItems,
    isPhotosModalOpen,
    setIsPhotosModalOpen,
    photos,
    activePhoto,
    setActivePhoto,
}: HomepageProps) => {
    const [productCounter, setProductCounter] = useState<number>(1)
    const { isItemAddedToCart, setIsItemAddedToCart }: AppContextInterface =
        useContext(AppContext)
    return (
        <div className={`homepage-container ${isPhotosModalOpen && 'blured'}`}>
            <div className='photos-container'>
                <div className='main-photo'>
                    <div className='arrows'>
                        <div
                            className='left-arrow arrow'
                            onClick={() => {
                                if (activePhoto.id >= 1) {
                                    setActivePhoto(
                                        (prevValue: Photo) =>
                                            photos[prevValue.id - 1]
                                    )
                                }
                            }}
                            style={{
                                opacity: activePhoto.id >= 1 ? '1' : '0',
                            }}
                        >
                            {' '}
                            <img src={leftArrow} alt='left arrow' />
                        </div>
                        <div
                            className='right-arrow arrow'
                            onClick={() => {
                                if (activePhoto.id <= 2) {
                                    setActivePhoto(
                                        (prevValue: Photo) =>
                                            photos[prevValue.id + 1]
                                    )
                                }
                            }}
                            style={{
                                opacity: activePhoto.id <= 2 ? '1' : '0',
                            }}
                        >
                            {' '}
                            <img src={rightArrow} alt='right arrow' />
                        </div>
                    </div>
                    <img
                        src={activePhoto.big}
                        alt='Active Photo'
                        onClick={() => {
                            setIsPhotosModalOpen(true)
                        }}
                    />
                </div>
                <div className='photos-gallery'>
                    {photos.map((photo, index) => (
                        <div className='photo-container' key={index}>
                            <div
                                className={`photo ${
                                    photo.id === activePhoto.id ? 'active' : ''
                                }`}
                                onClick={() => {
                                    setActivePhoto(photo)
                                }}
                                key={index}
                            >
                                <img
                                    src={photo.small}
                                    alt='Photo Thumbnail'
                                    className={`${
                                        photo.id === activePhoto.id
                                            ? 'active'
                                            : ''
                                    }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='label-container'>
                <div className='header-paragraph'>Sneaker Company</div>
                <header>Fall Limited Edition Sneakers</header>
                <p>
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.
                </p>
                <div className='prices-container'>
                    <div className='price-container'>
                        <h3 className='discount-price'>$125.00</h3>
                        <div className='discount-percentage'>50%</div>
                    </div>
                    <h5 className='price'>$250.00</h5>
                </div>
                <footer>
                    <div className='counter-container'>
                        <div
                            className='minus ctr-btn'
                            onClick={() => {
                                if (productCounter > 1) {
                                    setProductCounter(
                                        (prevValue) => prevValue - 1
                                    )
                                }
                            }}
                        >
                            <img src={minus} alt='' />
                        </div>
                        <div className='counter ctr-btn'>{productCounter}</div>
                        <div
                            className='plus ctr-btn'
                            onClick={() =>
                                setProductCounter((prevValue) => prevValue + 1)
                            }
                        >
                            <img src={plus} alt='' />
                        </div>
                    </div>
                    <div className='button-container'>
                        <button
                            onClick={() => {
                                if (
                                    cartItems.length === 0 &&
                                    productCounter > 0
                                ) {
                                    setCartItems([
                                        {
                                            id: 0,
                                            photo: img1small,
                                            title: 'Fall Limited Edition Sneakers',
                                            price: 125,
                                            amount: productCounter,
                                        },
                                    ])
                                    setIsItemAddedToCart(true)
                                } else if (productCounter > 0) {
                                    setCartItems([
                                        {
                                            id: 0,
                                            photo: img1small,
                                            title: 'Fall Limited Edition Sneakers',
                                            price: 125,
                                            amount:
                                                productCounter +
                                                cartItems[0].amount,
                                        },
                                    ])
                                    setIsItemAddedToCart(true)
                                }
                            }}
                        >
                            <img src={cartICON} alt='Cart Icon' />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Homepage
