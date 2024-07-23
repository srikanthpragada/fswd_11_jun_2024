// Validate properties 

import React from 'react'
import PropTypes from 'prop-types';

export default function ProductValidate({ name, price }) {
  return (
    <>
      <h2>Name : {name} </h2>
      <h3>Price: {price} </h3>
    </>
  )
}


ProductValidate.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};