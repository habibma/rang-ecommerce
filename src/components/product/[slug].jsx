import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Button from '../button/Button';
import Like from '../Like/Like';

const ProductDetails = () => {

  const { cartItems, handleCartItems, favorites, handleFavorites, products } = useContext(GlobalContext);
  const [product, setProduct] = useState({})

  // const [, updateState] = useState();
  // const forceUpdate = () => updateState({});

  const { id } = useParams()
  // console.log("id= ",id);

  // Fetching product data from fakestoreapi
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
    setProduct(() => {
      return products.filter(pro => pro.id === id)
    })
  }, [id]);

  // console.log(favorites);

  const itemIndex = cartItems.findIndex(item => item.id === product.id)

  const favIndex = (favorites.findIndex(item => item.id === product.id) === -1 ? false : true)
  // console.log(favIndex);

  return (
    <>
      <Header />
      {id && <div className='product-page'>
        <section className='product-page--img-frame'>
          <img src={product.image} alt={product.title} />
          <div className="like-container">
            <Like status={favIndex} onChange={() => handleFavorites({ type: "TOGGLE", product: product })} />
          </div>
        </section>
        <section>
          <div className='product-page--desc'>
            <small>{`category / ${product.category}`}</small>
            <div>
              <h2 className='product-title'>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <div className='buy-section'>
              <div><b>Price: </b>${product.price}</div>
              <small>Pricing incl. VAT and Shipping</small>
              <Button
                type='secondary'
                onClick={() => handleCartItems({ type: "ADD", product: product })}
              >
                {itemIndex === -1 ? "Add to Cart" : "Added"}
              </Button>
              <button className='button' onClick={forceUpdate}>Buy Now</button>
            </div>
          </div>
        </section>
      </div>}
      <Footer />
    </>
  )
}

export default ProductDetails