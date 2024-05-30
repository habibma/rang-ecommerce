import React, { useEffect, useState } from 'react';
import Card from '../../card/Card';
import { nanoid } from 'nanoid';

const ProductCategories = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(
                data.map(item => ({ id: nanoid(), title: item, image: `${item}.jpg` }))
            ))
    }, [])

    return (
        <>
            {categories && categories.map(category => {
                return (
                    <Card key={category.id} title={category.title} img={category.image} href={`/categories/${category.title}`} />
                )
            })}
        </>
    )
}

export default ProductCategories