import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import Header from '../Header';
import Footer from '../Footer';

const ProductDetails = () => {

  const { cartItems, handleCartItems } = useContext(GlobalContext);
  const [product, setProduct] = useState({})

  const { id } = useParams()

  // Fetching product data from fakestoreapi
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  // to find the index of product inside the catr items array
  const itemIndex = cartItems.findIndex(item => item.id === product.id)

  return (
    <>
    <Header />
    <div className='product-page'>
      <section className='row'>
        <div className='product-page--img-frame'><img src={product.image} alt={product.title} /></div>
      </section>
      <section className='row'>
        <div className='product-page--desc'>
          <small>{`category / ${product.category}`}</small>
          <div>
            <h2 className='product-title'>{product.title}</h2>
            <p>{product.description}</p>
          </div>
          <div className='buy-section'>
            <div><b>Price: </b>${product.price}</div>
            <p>Pricing incl. VAT and Shipping</p>
            <button
              className='button btn-secondary'
              onClick={() => handleCartItems({ type: "ADD", product: product })}
            >
              {itemIndex === -1 ? "Add to Cart" : "Added"}
            </button>
            <button className='button'>Buy Now</button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default ProductDetails