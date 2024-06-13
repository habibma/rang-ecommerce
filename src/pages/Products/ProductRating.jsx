import React, { useCallback, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import RatingReview from '../../components/review/RatingReview'

const ProductRating = () => {

    const { rating } = useOutletContext()

    const initialRate = rating?.rate || null

    const [rate, setRate] = useState()
    const [count, setCount] = useState(rating?.count || undefined)

    const increment = useCallback(() => {
        setCount(count => {
            if(count === rating.count) {
                return count + 1
            }
            return count;
        })
    },[setCount])

    const handlechange = star => {
        setRate(star)
        increment()
    }

    return (
        <section>
            <div className='review'>
                <b>Rate:</b> {<RatingReview initialRate={initialRate} rate={rate} handlechange={handlechange} />} ({count})
            </div>
            {rate && <span><b>Your Rate: </b>{rate}</span>}
        </section>
    )
}

export default ProductRating