import React, { useState, useContext, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import './products.scss'
import ProductCard from '../../components/card/ProductCard';
import Menu from '../../components/Menu/index';
import Button from '../../components/button/Button';
import InputRange from '../../components/input/InputRange';

const Products = () => {

  const { products, setSelect, select } = useContext(GlobalContext);

  const [price, setPrice] = useState({
    atLeast: 0,
    atMost: 0
  })

  const [searchParams, setSearchParams] = useSearchParams()

  const pricesArray = useMemo(()=> products.map(product => product.price), [products])
  const minPrice = Math.floor(Math.min(...pricesArray))
  const maxPrice = Math.ceil(Math.max(...pricesArray))

  useEffect(() => {
    setPrice({
      atLeast: minPrice,
      atMost: maxPrice,
    })
  }, [products])


  const handleChange = useCallback(({ target }) => {
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
  },[setSearchParams, setPrice])

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
        <InputRange min={minPrice} max={maxPrice} name='atLeast' value={price.atLeast} onChange={handleChange} lable='Min Price:'>{price.atLeast}$</InputRange>
        <InputRange min={minPrice} max={maxPrice} name='atMost' value={price.atMost} onChange={handleChange} lable='Max Price:'>{price.atMost}$</InputRange>
        {(priceMinFilter || priceMaxFilter) ? <Button type='secondary' onClick={handleChange}>Reset</Button> : null}
      </div>
      <div className="products-list">
        {displayedProducts.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
      </div>
    </>
  )
}

export default Products