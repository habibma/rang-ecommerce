import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/Context';
import Button from '../../button/Button';
import Like from '../../Like/Like';
import Image from '../../Image/Image';

const ProductDetails = () => {

  const { cartItems, handleCartItems, favorites, handleFavorites, products } = useContext(GlobalContext);

  const [product, setProduct] = useState({})
  const [fav, setFav] = useState()

  const { id } = useParams()

  useEffect(() => {
    setProduct(() => {
      return products.filter(product => product.id == id)[0]
    })
  }, [id, products]);

  useEffect(() => {
    setFav(favorites.findIndex(item => item.id == product.id) === -1 ? false : true)
  }, [product, favorites])

  const itemIndex = cartItems.findIndex(item => item.id === product.id)


  return (
    <>
      {product ? <div className='product-page'>
        <section className='product-page--img-frame' >
          <Image src={product.image} alt={product.title} loading="lazy"/>
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
              <Link to="/checkout"><Button
                type='secondary'
                onClick={() => handleCartItems({ type: "ADD", product: product })}
              >
                Buy Now
              </Button></Link>
            </div>
          </div>
        </section>
      </div > : <h2>Loading ...</h2>}
    </>
  )
}

export default ProductDetails