import React from 'react';
import './Products.css'

const Product = (props) => {
  const {name,img,seller,price,ratings} = props.productValue;
  
  return (

    <div className='product'>
      <img src={img} alt="" />
      <p className='product-name'>{name}</p>
    </div>
    
  );
};

export default Product;