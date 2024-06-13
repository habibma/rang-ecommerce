import React, { useState } from 'react'

function RatingReview({ rate, handlechange = () => { }, increment, initialRate }) {

    const [hover, setHover] = useState(initialRate)

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {

                return (
                    <label key={star}>
                        <input
                            type="radio"
                            name='rate'
                            style={{
                                display: 'none'
                            }}
                            value={rate}
                            onClick={() => handlechange(star)}
                        />
                        <span
                            className='start'
                            style={{
                                cursor: 'pointer',
                                color: hover >= star ? 'gold' : 'gray',
                                fontSize: `25px`,
                            }}
                            value={hover}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(initialRate)}
                        >
                            {''}
                            ★{''}
                        </span>
                    </label>
                )
            })}
        </div>
    )
}

export default RatingReview;