import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import ProductCard from '../ProductCard';
import Modal from "../Modal";
import CartItem from '../CartItem';
import Loader from '../Loader';
import SelectCurrency from '../SelectCurrency';

const GET_ALL_PRODUCTS = gql`
  query products {
  products {
    id
    title
    image_url
    price(currency: USD)
  }
}
`;

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const onToggle = () => {
    setShowModal(!showModal);
  };
  if (loading) {
    return <div className="loader-wrapper"><Loader /></div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
    <div className="columns">
      {data.products.map(product => (
        <div className="md-col-4 sm-col-6" key={product.id}>
          <ProductCard
            key={product.id}
            onToggle={onToggle}
            image={product.image_url}
            title={product.title}
            price={product.price}
          />
        </div>
      ))}
      {showModal ? (
        <Modal>
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-header-text">YOUR CART</span>
              <span className="closemodal" onClick={onToggle}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7066 0.293731C15.7997 0.386605 15.8735 0.496935 15.9239 0.618402C15.9743 0.73987 16.0003 0.870087 16.0003 1.0016C16.0003 1.13311 15.9743 1.26332 15.9239 1.38479C15.8735 1.50626 15.7997 1.61659 15.7066 1.70946L1.7094 15.7068C1.52167 15.8945 1.26704 16 1.00155 16C0.73605 16 0.481427 15.8945 0.293691 15.7068C0.105956 15.5191 0.000488283 15.2644 0.000488281 14.9989C0.000488279 14.7334 0.105956 14.4788 0.293691 14.2911L14.2908 0.293731C14.3837 0.200623 14.494 0.126751 14.6155 0.0763476C14.737 0.0259443 14.8672 0 14.9987 0C15.1302 0 15.2604 0.0259443 15.3819 0.0763476C15.5033 0.126751 15.6137 0.200623 15.7066 0.293731V0.293731Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.293728 0.293731C0.20062 0.386605 0.126749 0.496935 0.0763466 0.618402C0.0259439 0.73987 0 0.870087 0 1.0016C0 1.13311 0.0259439 1.26332 0.0763466 1.38479C0.126749 1.50626 0.20062 1.61659 0.293728 1.70946L14.2909 15.7068C14.4786 15.8945 14.7332 16 14.9987 16C15.2642 16 15.5189 15.8945 15.7066 15.7068C15.8943 15.5191 15.9998 15.2644 15.9998 14.9989C15.9998 14.7334 15.8943 14.4788 15.7066 14.2911L1.70944 0.293731C1.61657 0.200623 1.50624 0.126751 1.38477 0.0763476C1.26331 0.0259443 1.13309 0 1.00158 0C0.870076 0 0.73986 0.0259443 0.618394 0.0763476C0.496929 0.126751 0.3866 0.200623 0.293728 0.293731V0.293731Z"
                    fill="black"
                  />
                </svg>
              </span>
              <SelectCurrency />
            </div>
            <div className="modal-body">

              <div className="cartitem-wrapper">
                <CartItem
                  cartItemTitle="Cocooil meta"
                  cartItemPrice="40"
                  cartItemImage="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <CartItem
                  cartItemTitle="Cocooil meta"
                  cartItemPrice="40"
                  cartItemImage="https://images.unsplash.com/photo-1567433517180-d3e56cf7f81e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <CartItem
                  cartItemTitle="Cocooil meta"
                  cartItemPrice="40"
                  cartItemImage="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
                <CartItem
                  cartItemTitle="Cocooil meta"
                  cartItemPrice="40"
                  cartItemImage="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </div>
            <div className="modal-footer">
              <div className="subtotal">
                <span>Subtotal</span>
                <span>60</span>
              </div>
              <div className="flex">
                <button className="button checkout-btn">Proceed to checkout</button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default Products;
