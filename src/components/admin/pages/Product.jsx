import React from 'react'
import Single from '../Single';
import {singleProduct} from '../../../data'

const Product = () => {

  //fetch data an pass down to the single component

  return (
    <div className='product-single-page'>
      <Single {...singleProduct} />
    </div>
  )
}

export default Product;