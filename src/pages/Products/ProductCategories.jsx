import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { nanoid } from 'nanoid';
import { getCategories } from '../../api';

const ProductCategories = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const loadCategories = async () => {
            const data = await getCategories()
            setCategories(
                data.map(item => ({ id: nanoid(), title: item, image: `${item}.jpg` }))
            )
        }

        loadCategories()
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