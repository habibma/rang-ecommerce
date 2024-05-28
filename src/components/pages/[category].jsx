import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../card/ProductCard'
import Categories from './Categories'

const Category = () => {

    const { category } = useParams()
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [category])

    console.log((Categories));

    return (
        <div className="products-list">
            {products && products.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
        </div>
    )
}

export default Category