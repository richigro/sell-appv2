const react = require("react");
import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import './ProductList.css';
const products = [
  {
    name: 'Cold War For ps5',
    price: 40.99,
    location: 'san Marcos, Tx',
    image: 'https://photos.offerup.com/DY2hQGKNWY-0rauDr6E8msm5elE=/250x333/d058/d058d31e278a464da051e164f5346a29.jpg'
  },
  {
    name: 'Cold War For ps5',
    price: 40.99,
    location: 'san Marcos, Tx',
    image: 'https://photos.offerup.com/DY2hQGKNWY-0rauDr6E8msm5elE=/250x333/d058/d058d31e278a464da051e164f5346a29.jpg'
  },
  {
    name: 'Cold War For ps5',
    price: 40.99,
    location: 'san Marcos, Tx',
    image: 'https://photos.offerup.com/DY2hQGKNWY-0rauDr6E8msm5elE=/250x333/d058/d058d31e278a464da051e164f5346a29.jpg'
  },
  {
    name: 'Cold War For ps5',
    price: 40.99,
    location: 'san Marcos, Tx',
    image: 'https://photos.offerup.com/DY2hQGKNWY-0rauDr6E8msm5elE=/250x333/d058/d058d31e278a464da051e164f5346a29.jpg'
  },
  {
    name: 'Cold War For ps5',
    price: 40.99,
    location: 'san Marcos, Tx',
    image: 'https://photos.offerup.com/DY2hQGKNWY-0rauDr6E8msm5elE=/250x333/d058/d058d31e278a464da051e164f5346a29.jpg'
  },
];

const ProductList = props => {
  return (
    <div className="products-container">
      {products.map((product, index) => {
        return <Product key={index} product={product}/>;
      })}
    </div>
  );
};

ProductList.propTypes = {
  
};

export default ProductList;