import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Button from '../button/Button';
import Like from '../Like/Like';

const ProductDetails = () => {
  console.log('---------')

  const { cartItems, handleCartItems, favorites, handleFavorites, products } = useContext(GlobalContext);
  console.log(
    "cartItems", cartItems,
    '\nfavorites', favorites,
    '\nproducts', products
  )
  const [product, setProduct] = useState({})
  const [fav, setFav] =useState()

  const [refresh, setRefresh] =useState({})

  const { id } = useParams()
  console.log('id:',id)

  useEffect(() => {
    setProduct(() => {
      return products.filter(product => product.id == id)[0]
    })
  }, [id, products]);

  console.log('this product after searching in products:', product)

  useEffect(() => {
    setFav(favorites.findIndex(item => item.id == product.id) === -1 ? false : true)
  }, [product, favorites])

  const itemIndex = cartItems.findIndex(item => item.id === product.id)
  console.log('itemIndex in Cart:',itemIndex);

  console.log('is this product in favorite List? (after searching in favorite list)', fav);

  return (
    <>
      <Header />
      {product ? <div className='product-page'>
        <section className='product-page--img-frame'>
          <img src={product.image} alt={product.title} />
          <div className="like-container">
           <Like status={fav} onChange={() => handleFavorites({ type: "TOGGLE", product: product })} />
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
              <button onClick={()=> setRefresh(pre => {return {...pre}})} className='button'>Buy Now</button>
            </div>
          </div>
        </section>
      </div> :  <h2>Loading ...</h2>}
      <Footer />
    </>
  )
}

export default ProductDetails