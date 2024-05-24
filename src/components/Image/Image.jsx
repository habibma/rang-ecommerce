import React from 'react'
import './image.css'

const Image = ({size, className, ...otherProps}) => {
    return (
        <img className={`${className} image image-${size}`} {...otherProps}/>
    )
}

export default Image;