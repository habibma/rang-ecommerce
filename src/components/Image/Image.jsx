import React from 'react'

const Image = ({src, alt, size, className}) => {
    return (
        <img className={`${className} image image-${size}`} src={src} alt={alt}/>
    )
}

export default Image;