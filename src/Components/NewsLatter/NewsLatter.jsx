import React from 'react'
import './NewsLetter.css'

export const NewsLatter = () => {
  return (
    <div className='news_latter'>
      <h1>Get Exclusive Offers On Your Email </h1>
      <p>Subscribe To Our NewsLatter and Stay Updated</p>
      <div>
        <input type="email" placeholder='Your email id' />
        <button>Subscribe</button>
      </div>
    </div>

  )
}
