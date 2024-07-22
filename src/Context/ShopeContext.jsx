import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";


export const ShopeContext = createContext(null);

const getDefaultCart = ()=>{
    let Cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        Cart[index] = 0;
    }  
    return Cart;
   }
 

const ShopeContextProvider = (props)=>{
   
    const [cartItems,setCartItems] = useState(getDefaultCart());

     
    const addToCart = (ItemId) =>{
    setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
  
    }

    const removeFromCart = (ItemId) =>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId] - 1}))
     }

     const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            console.log(cartItems);
            if (cartItems[item]>0) {           
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            return totalAmount;
        } 
     }
    
     const contextValue = {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
   return(
    <ShopeContext.Provider value={contextValue}>
        {props.children}
    </ShopeContext.Provider>
   )
}
export default ShopeContextProvider;