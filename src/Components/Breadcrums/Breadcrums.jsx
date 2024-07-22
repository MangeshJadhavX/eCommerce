import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


export const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumbs'>
     HOME <img src={arrow_icon} alt="" />SHOPE <img src={arrow_icon} alt="" />{product.category } <img src={arrow_icon} alt="" /> {product.name}

    </div>
  )
}
