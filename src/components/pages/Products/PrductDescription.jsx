import React from 'react'
import { useOutletContext } from 'react-router-dom'

const PrductDescription = () => {

    const { description } = useOutletContext()
    return (
        <section>
            {description}
        </section>
    )
}

export default PrductDescription