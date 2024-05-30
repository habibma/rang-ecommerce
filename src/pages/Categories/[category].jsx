import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../../components/card/ProductCard'

const Category = () => {

    const { category } = useParams()
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [category])

    return (
        <>
            <div className='row'><Link to=".." relative="path" className="back-button">&larr; <span>All Categories</span></Link></div>
            <div className="products-list">
                {products && products.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
            </div>
        </>
    )
}

export default Category