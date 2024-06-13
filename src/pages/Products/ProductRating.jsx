import React from 'react'
import { useOutletContext } from 'react-router-dom'
import RatingReview from '../../components/review/RatingReview'

const ProductRating = () => {

    const { rating } = useOutletContext()

    return (
        <section className='review'>
            <b>Rate:</b> {<RatingReview rating={rating.rate} />} ({rating.count})
        </section>
    )
}

export default ProductRating