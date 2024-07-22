import React from 'react'
import './css/LoginSignUp.css'

export const LoginSignUp = () => {
  return (
    <div className='login_sign_up'> 
    <div className="login_sign_up_container">
        <h1>Sign Up</h1>
        <div className="login_sign_up_fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address'/>
            <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="login_sign_up_login">Already have an Account <span>Login here</span></p>
        <div className="login_sign_up_agree">
            <input type="checkbox" name='' id='' />
            <p>By continue ,i agree to terms of use & privacy policy</p>
        </div>
    </div>
    
    </div>
  )
}

