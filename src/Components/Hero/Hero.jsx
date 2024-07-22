  import React from 'react'
  import './Hero.css'
  import hand_icon from '../Assets/hand_icon.png'
  import arrow_icon from "../Assets/arrow.png"
  import hero_imge from '../Assets/hero_image.png'
  
  export const Hero = () => {
    return (
      <div className='Hero'>
        <div className="HeroLeft">
         <h2>NEW ARRIVALS ONLY</h2>
         <div>
            <div className="hero_hand_icon">
           <p>new</p>
           <img src={hand_icon} alt="" />
            </div>
          <p>collation <br/>for everyone</p>  
        </div>
        <div className="hero_latest_btn">
           <div>Latest Collation</div> 
           <img src={arrow_icon} alt=""/>
            </div>            
        </div>
        <div className="HeroRight">
            <img src={hero_imge} alt="" />
        </div>
      </div>
    )
  }
  