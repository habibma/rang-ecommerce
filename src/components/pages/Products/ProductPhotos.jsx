import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Image from '../../Image/Image'

const ProductPhotos = () => {

    const { photos } = useOutletContext()
    return (
        <section className='gallry'>
            <Image className='photo' size="thumbnail" src={photos} alt=""/>
        </section>
    )
}

export default ProductPhotos