import React, { useContext } from 'react'
import './css/ShopeCategory.css'
import { ShopeContext } from '../Context/ShopeContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

export const ShopeCategory = (props) => {
    const {all_product} = useContext(ShopeContext)
  return (
    <div className='shope_category'>
        <img className='shope_category_banner' src={props.banner} alt="" />
        <div className="shope_category_index_sort">
            <p>
                <span>showing 1-12</span>out of 36 products
            </p>
            <div className="shope_category_sort">
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className="shope_category_product">
            {all_product.map((item,i)=>{
           if (props.category === item.category) {
            return <Item key={i} id ={item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
           }
           else{
            return null;
           }
            })}
        </div>
        <div className="shope_category_lode_more">
            Explore More
        </div>
         </div>
  )
}
