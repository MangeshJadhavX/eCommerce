import React from 'react'
import './Offer.css'
import exclusive_img from '../Assets/exclusive_image.png'

export const Offer = () => {
  return (
    <div className='offers'>
        <div className="offer_left">
    <h1>Exclusive</h1>
    <h1>Offer For You</h1>
    <button>Check Now</button>
        </div>
        <div className="offer_right">
         <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}
