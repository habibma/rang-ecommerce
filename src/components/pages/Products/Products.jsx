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
        <Menu id="categories" onOpen={() => console.log("price clicked!")} onChange={setSelect}>
          <Menu.Button shape='arrow'>{select || 'Categories'}</Menu.Button>
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