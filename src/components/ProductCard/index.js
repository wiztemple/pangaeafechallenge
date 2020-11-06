import React, { useState } from 'react';

// product card style
import './ProductCardStyle.css';

const ProductCard = ({ image, title, price, onToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(true);
    if (onToggle) onToggle(showModal);
  };
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Product" />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        <div className="card-footer">
          <span className="card-price">{price}</span>
          <button className="button button-small" onClick={onClick}>Add to Card</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
