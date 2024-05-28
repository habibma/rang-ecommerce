import React, { useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../../../context/Context';
import './products.scss'
import ProductCard from '../../card/ProductCard';
import Menu from '../../menu/index'
import { useSearchParams } from 'react-router-dom';

const Products = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const [price, setPrice] = useState()

  function handleChange({ target }) {
    setPrice(target.value)
    setSearchParams(`?price=${target.value}`)
  }

  const { products, setSelect, select } = useContext(GlobalContext);

  const priceFilter = +searchParams.get('price')

  const displayedProducts = priceFilter
    ? products.filter(product => product.price <= priceFilter)
    : products

  const prices = products.map(product => product.price)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  return (
    <>
      <div className="sort-bar">
        <Menu id="categories" onOpen={() => console.log("price clicked!")} onChange={setSelect}>
          <Menu.Button shape='arrow'>{select || 'Categories'}</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item value="electronics">Electronics</Menu.Item>
            <Menu.Item value="jewelery">Jewelery</Menu.Item>
            <Menu.Item value="men's clothing">men's</Menu.Item>
            <Menu.Item value="women's clothing">women's</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <div className="price">
          <span>{minPrice}</span>
          <input
            type='range'
            min={minPrice}
            max={maxPrice}
            step="0.5"
            onChange={handleChange}
          />
          {/* <span>{maxPrice}</span> */}
          <span
            // className='state'
            style={{ left: price / 10 + 20 }}
          >
            {price}
          </span>
        </div>
      </div>
      <div className="products-list">
        {displayedProducts.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
      </div>
    </>
  )
}

export default Products