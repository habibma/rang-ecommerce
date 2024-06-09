import React from 'react'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({ img = null, title, description = null, button = null, href = null}) => {
    return (
        <div className='card'>
            <div className='card--frame'><Link to={href}><img src={img} alt={title} /></Link></div>
            <Link to={href}><h2 className='title'>{title}</h2></Link>
            {description && <p>{description}</p>}
            {button && <Link to={href}><Button>{button}</Button></Link>}
        </div>
    )
}

export default Card