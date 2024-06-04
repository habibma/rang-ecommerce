import React from 'react'
import './callToAction.scss'
import Button from '../button/Button'

const CallToAction = ({ children, buttonText, onClick }) => {
    return (
        <div className='call-to-action'>
            <p>{children}</p>
            <Button type="primary" onClick={onClick}>{buttonText}</Button>
        </div>
    )
}

export default CallToAction