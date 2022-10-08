import React from 'react';
import './Products.css'

const Product = (props) => {
  const {name,img,seller,price,ratings} = props.productValue;
  
  return (
    <div>
      <img src={img} alt="" />
      <h1>{name}</h1>
    </div>
  );
};

export default Product;