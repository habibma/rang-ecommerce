import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ProductRating = () => {

    const { rating } = useOutletContext()

    return (
        <section>
            <p><b>Rate:</b> {rating.rate}</p>
            <p><b>Count:</b> {rating.count}</p>
        </section>
    )
}

export default ProductRating