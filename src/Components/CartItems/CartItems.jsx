import React, { useContext } from 'react'
import './CartItems.css'
import { ShopeContext } from '../../Context/ShopeContext'
import remove_icon from '../Assets/cart_cross_icon.png'
 
export const CartItems = () => {
  const{all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopeContext)  
  return (
    <div className='cart_items'>
        <div className="cartItems_format_main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p> 
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr /> 
    {all_product.map((e)=>{
        if (cartItems[e.id] > 0) {
            return    <div>
            <div className="cartItems_format cartItems_format_main">
                <img src={e.image} alt="" className='cartIcon_productIcon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartItems_quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartItem_removeIcon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
            </div>
        }
        return null;
    })} 
    <div className="cartItems_down">
        <div className="cartItems_total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartItems_totalItems">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>                    
                </div>
                <hr />
                <div className="cartItems_totalItems">
                    <p>Shipping Fee</p>
                    <p>Free</p >
                </div>
                <hr />
                <div className="cartItems_totalItems">
                    <p>GST Include 18%</p>
                    <p>${0}</p>
                </div>
                <hr />
                <div className="cartItems_totalItems">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
               
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems_promoCode">
            <p>If you have a promo code ,Enter it here</p>
            <div className="carItems_promoBox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
    </div>
         </div>
  )
}
