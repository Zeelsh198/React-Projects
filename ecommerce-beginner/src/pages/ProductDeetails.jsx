import React from 'react'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../products';
import "./ProductDeetails.css"
export const ProductDeetails = () => {

    const {id} = useParams();
    const product = PRODUCTS.find((product) =>product.id === Number(id));

    if(!product) <h1>Product Not Found!!!</h1>;



  return (
    <div className='product-details'>
        <h1>{product.productName}</h1>
        <img src={product.productImage} alt={product.productName} />
        <p>Price: ₹{product.price}</p>
        <p>{product.description}</p> 
    </div>
  )
}
