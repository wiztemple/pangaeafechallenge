import React from 'react';
// cart ite style
import './CartItemStyle.css';

const CartItem = ({ cartItemTitle, cartItemPrice, cartItemImage }) => {
  return (
    <div className="cartitem">
      <div className="cartitem-header">
        <h1>{cartItemTitle}</h1>
        <button className="button remove-item-button">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85488 0.146894C7.90144 0.193339 7.93838 0.248515 7.96359 0.30926C7.98879 0.370005 8.00177 0.435127 8.00177 0.500894C8.00177 0.566661 7.98879 0.631782 7.96359 0.692528C7.93838 0.753273 7.90144 0.808448 7.85488 0.854894L0.854876 7.85489C0.760989 7.94878 0.633651 8.00152 0.500876 8.00152C0.3681 8.00152 0.240762 7.94878 0.146876 7.85489C0.052989 7.76101 0.000244142 7.63367 0.000244141 7.50089C0.00024414 7.36812 0.052989 7.24078 0.146876 7.14689L7.14688 0.146894C7.19332 0.10033 7.2485 0.0633875 7.30924 0.0381811C7.36999 0.0129746 7.43511 0 7.50088 0C7.56664 0 7.63176 0.0129746 7.69251 0.0381811C7.75325 0.0633875 7.80843 0.10033 7.85488 0.146894V0.146894Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.146894 0.146894C0.10033 0.193339 0.0633875 0.248515 0.0381811 0.30926C0.0129746 0.370005 0 0.435127 0 0.500894C0 0.566661 0.0129746 0.631782 0.0381811 0.692528C0.0633875 0.753273 0.10033 0.808448 0.146894 0.854894L7.14689 7.85489C7.24078 7.94878 7.36812 8.00152 7.50089 8.00152C7.63367 8.00152 7.76101 7.94878 7.85489 7.85489C7.94878 7.76101 8.00152 7.63367 8.00152 7.50089C8.00152 7.36812 7.94878 7.24078 7.85489 7.14689L0.854894 0.146894C0.808448 0.10033 0.753273 0.0633875 0.692528 0.0381811C0.631782 0.0129746 0.566661 0 0.500894 0C0.435127 0 0.370005 0.0129746 0.30926 0.0381811C0.248515 0.0633875 0.193339 0.10033 0.146894 0.146894V0.146894Z" fill="black" />
          </svg>

        </button>
      </div>
      <div className="cartitem-content">
        <div className="qty-btn">
          <button className="button decrement">-</button>
          <span className="current-count">1</span>
          <button className="button increment">+</button>
        </div>
        <div className="cartitem-price">{cartItemPrice}</div>
        <img className="cartitem-image" src={cartItemImage} alt="cart item" />
      </div>
    </div >
  )
}

export default CartItem;
