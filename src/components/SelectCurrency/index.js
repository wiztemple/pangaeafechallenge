import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_CURRENCIES = gql`
query currency {
  currency 
}
`

const SelectCurrency = ({ currencyHandler }) => {
  const { loading, error, data } = useQuery(GET_ALL_CURRENCIES);
  const [currencyType, setCurrencyType] = useState("USD")

  const onCurrencyChange = async (event) => {
    const currency = event.target.value;
    console.log('currency', currency);
    currencyHandler(currency);
    setCurrencyType(currency);
  }
  // const formatNumber = n => {
  //   return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyType }).format(n);
  // }
  console.log('currencyType', currencyType);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Oops, there's an error!</p>
  return (
    <select onChange={onCurrencyChange} value={currencyType}>
      {data.currency.map((currencyType, i) => (
        <option key={i}>{currencyType}</option>
      ))}
    </select>
  )
}

export default SelectCurrency;