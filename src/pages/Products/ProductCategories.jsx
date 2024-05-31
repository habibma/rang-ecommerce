import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { nanoid } from 'nanoid';
import { getCategories } from '../../api';

const ProductCategories = () => {

    const [categories, setCategories] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadCategories = async () => {
            setLoading(true)

            try {
                const data = await getCategories()
                setCategories(
                    data.map(item => ({ id: nanoid(), title: item, image: `${item}.jpg` }))
                )
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false)
            }
        }

        loadCategories()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>There was an error: {error.message}</h1>
    }

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