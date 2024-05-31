import React, { useState, useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import './products.scss'
import ProductCard from '../../components/card/ProductCard';
import Menu from '../../components/Menu/index';
import Button from '../../components/button/Button';

const Products = () => {

  const { products, setSelect, select } = useContext(GlobalContext);

  const prices = products.map(product => product.price)
  const minPrice = Math.floor(Math.min(...prices))
  const maxPrice = Math.ceil(Math.max(...prices))

  const [price, setPrice] = useState({
    atLeast: minPrice,
    atMost: maxPrice
  })

  const [searchParams, setSearchParams] = useSearchParams()

  function handleChange({ target }) {
    const { name, value } = target;
    if (!value) {
      setSearchParams({})
      setPrice({ atLeast: 0, atMost: 1000 })
    } else {
      setSearchParams(params => {
        params.set([name], value)
        return params
      })
      setPrice(prevState => ({ ...prevState, [name]: +value }))
    }
  }

  const priceMinFilter = +searchParams.get('atLeast')
  const priceMaxFilter = +searchParams.get('atMost')

  const displayedProducts = priceMinFilter || priceMaxFilter
    ? products.filter(product => product.price >= (priceMinFilter || price.atLeast) && product.price <= (priceMaxFilter || price.atMost))
    : products

  return (
    <>
      <div className="sort-bar">
        <Menu id="categories" onChange={setSelect}>
          <Menu.Button shape='arrow'>{select || 'Categories'}</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item value="">All</Menu.Item>
            <Menu.Item value="electronics">Electronics</Menu.Item>
            <Menu.Item value="jewelery">Jewelery</Menu.Item>
            <Menu.Item value="men's clothing">men's</Menu.Item>
            <Menu.Item value="women's clothing">women's</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <div className="price">
          <label htmlFor='price-range-min'>Min Price:</label>
          <input
            type='range'
            id='price-range-min'
            min={minPrice}
            max={maxPrice}
            name='atLeast'
            value={price.atLeast}
            onChange={handleChange}
          />
          <span>
            {price.atLeast}$
          </span>
        </div>
        <div className="price">
          <label htmlFor='price-range-max'>Max Price:</label>
          <input
            type='range'
            id='price-range-max'
            min={minPrice}
            max={maxPrice}
            name='atMost'
            value={price.atMost}
            onChange={handleChange}
          />
          <span>
            {price.atMost}$
          </span>
        </div>
        { (priceMinFilter || priceMaxFilter) ? <Button type='secondary' onClick={handleChange}>Reset</Button> : null}
      </div>
      <div className="products-list">
        {displayedProducts.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
      </div>
    </>
  )
}

export default Products