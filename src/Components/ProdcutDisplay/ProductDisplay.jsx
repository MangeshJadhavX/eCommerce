import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopeContext } from '../../Context/ShopeContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopeContext)

  return (
    <div className='product_display'>
        <div className="product_display_left">
         <div className="product_display_img_list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
         </div>
         <div className="product_display_img">
          <img className='product_display_main_img' src={product.image} alt="" />
         </div>
        </div>
        <div className="product_display_right">
         <h1>{product.name}</h1>
         <div className="product_display_right_star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
         </div>
         <div className="product_display_right_prices">
            <div className="price_old">${product.old_price}</div>
            <div className="price_new">${product.new_price}</div>
         </div>
         <div className="product_display_right_description">
         I like to eat usually needed full over shirt close breaking and 
         will a round neckline and short sleeves on a as under shirt or outer garments
         </div>
         <div className="product_display_right_size">
            <h1>Select Size</h1>
            <div className="product_display_right_sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
         </div>
         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
         <p className='product_display_right_category'><span>Category:</span> women,T-shirt,Crop Top </p>
         <p className='product_display_right_category'><span>Tags:</span> Modern ,Latest  </p>
        </div>
    </div>
  )
}
