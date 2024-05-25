import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../../../context/Context';
import './products.scss'
import ProductCard from '../../card/ProductCard';
import Menu from '../../menu/index'

const Products = () => {

  const { products, setSelect, select } = useContext(GlobalContext);

  return (
    <>
      <div className="sort-bar">
        <label htmlFor="categories">
          Categories:
        </label>
        <select id="categories" className="category" value={select} onChange={({ target }) => setSelect(target.value)} >
          <option value="" defaultValue>All</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
        {/* <select defaultValue="">
                    <option>Price</option>
                </select> */}
        <Menu onOpen={() => console.log("price clicked!")} onChange={setSelect}>
                    <Menu.Button>Price</Menu.Button>
                    <Menu.Dropdown>
                        <Menu.Item value="electronics">Electronics</Menu.Item>
                        <Menu.Item value="jewelery">Jewelery</Menu.Item>
                        <Menu.Item value="men's clothing">men's</Menu.Item>
                        <Menu.Item value="women's clothing">women's</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
      </div>
      <div className="products-list">
        {products.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
      </div>
    </>
  )
}

export default Products