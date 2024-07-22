 import React, { useState } from 'react'
 import './Navbar.css'
 import logo from '../Assets/logo.png'
 import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
 
 export const Navbar = () => {
   
     const [menu,setMenu] = useState('Shope'); 
     
    
   return (
     <div className='Navbar'> 
     <div className="nav-logo">
        <img src={logo} alt="the App logo"/>
        <p>Shopsy</p>
     </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shope")}}><Link className='links' to={'/'}>Shop</Link>{menu === "Shope"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link className='links' to={'/men'}>Men</Link>{menu === "Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link className='links' to={'/women'}>Women</Link>{menu === "Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link className='links' to={'/kids'} >Kids</Link>{menu === "Kids"?<hr/>:<></>}</li>
      </ul>
     <div className="cart-login">
        <Link to={'/login'}><button className='login'>Login</button></Link>
       <Link to={'/cartContainer'}><img src={cart_icon} alt="cart-icon"/></Link>
        <div className="cart_icon_count">0</div>
     </div>

     
     </div>
   )
 }
 