import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/Context';
import Button from '../../button/Button';
import Like from '../../Like/Like';
import Image from '../../Image/Image';

const ProductDetails = () => {

  const { cartItems, handleCartItems, favorites, handleFavorites, products } = useContext(GlobalContext);

  const [product, setProduct] = useState({})
  const [fav, setFav] = useState()

  const { id } = useParams()
  const location = useLocation()
  console.log(location);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  useEffect(() => {
    setProduct(() => {
      return products.filter(product => product.id == id)[0]
    })
  }, [id, products]);

  useEffect(() => {
    setFav(favorites.findIndex(item => item.id == product.id) === -1 ? false : true)
  }, [product, favorites])

  const itemIndex = cartItems.findIndex(item => item.id === product.id)

  const search = location.state || ""

  console.log(search);

  return (
    <>
      {product ? <div className='product-page'>
        <section className='product-page--img-frame' >
          <Image src={product.image} alt={product.title} loading="lazy" />
          <div className="like-container">
            <Like status={fav} onChange={() => handleFavorites({ type: "TOGGLE", product: product })} />
          </div>
        </section>
        <section>
          <div className='product-page--desc'>
            <small className='breadcrumb '><Link to=".." relative='path'>products</Link> / <Link to={`/categories/${product.category}`}>{product.category}</Link></small>
            <Link to={`..${search}`} relative="path" className="back-button">&larr; <span>Back to last page</span></Link>
            <h2 className='product-title'>{product.title}</h2>
            <div>
              <nav className='product-page--nav'>
                <NavLink to='.' style={({ isActive }) => isActive ? activeStyles : null} end>Description</NavLink>
                <NavLink to='reviews' style={({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
                <NavLink to='photos' style={({ isActive }) => isActive ? activeStyles : null}>Photos</NavLink>
              </nav>
              <Outlet context={{ description: product.description, rating: product.rating, photos: product.image }} />
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