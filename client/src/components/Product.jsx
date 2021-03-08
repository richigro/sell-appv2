import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name}/>
      <p>hi</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.location}</p>
    </div>
  );
};

Product.propTypes = {
  
};

export default Product;