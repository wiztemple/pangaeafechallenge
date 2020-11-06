import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_CURRENCIES = gql`
query currency {
  currency 
}
`
const SelectCurrency = () => {
  const { loading, error, data } = useQuery(GET_ALL_CURRENCIES);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Oops, there's an error!</p>
  return (
    <select>
      {data.currency.map((currencyType, i) => (
        <option key={i}>{currencyType}</option>
      ))}
    </select>
  )
}

export default SelectCurrency;