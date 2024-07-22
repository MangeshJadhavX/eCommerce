import React, { useContext } from 'react'
import { ShopeContext } from '../Context/ShopeContext';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProdcutDisplay/ProductDisplay';
import { DescripstionBox } from '../Components/DescripstionBox/DescripstionBox';
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct';

export const Product = () => {
    const {all_product} = useContext(ShopeContext);
    const {productID} = useParams();
    const product = all_product.find((e)=>e.id=== Number(productID));
  return (
    <div> 
        <Breadcrums product ={product}/>
        <ProductDisplay product = {product}/>
        <DescripstionBox/>
        <RelatedProduct/>
    </div>
  )
}
