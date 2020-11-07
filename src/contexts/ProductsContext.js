import React, { createContext, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Loader from '../components/Loader';


export const ProductsContext = createContext()

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
const ProductsContextProvider = ({ children }) => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const [products] = useState(data.products);
  console.log("products", products);
  if (loading) {
    return <div className="loader-wrapper"><Loader /></div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
    <ProductsContext.Provider value={{ products }} >
      { children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;

[{
  id: "1",
  title: "Cocoa Pod",
  image_url: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  price: 50
}
]