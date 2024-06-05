import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { getProduct } from '../../api';
import Single from '../Single';

const Product = () => {

  const { id } = useParams()

  const [product, setProduct] = useState()

  //to generate fake activities
  const activities = [];
  for (let i = Math.floor(Math.random() * 10); i < 10; i++) {
    const newItem = {
      text: `Purchased by ${faker.commerce.productName()}`,
      time: "2024-03-19T10:00:00Z",
    };
    activities.push(newItem);
  }

  useEffect(() => {
    getProduct(id)
      .then(data => setProduct({
        id: data.id,
        title: data.productName,
        img: data.image,
        info: {
          title: data.productName,
          price: data.price,
          category: data.category,
          description: data.description,
        },
        activities: activities,
      }))
  }, [id])

  return (
    <div className='product-single-page'>
      <Single {...product} />
    </div>
  )
}

export default Product;