import React from 'react'
import './callToAction.scss'
import Button from '../button/Button'

const CallToAction = ({ children, buttonText }) => {
    return (
        <div className='call-to-action'>
            <p>{children}</p>
            <Button type="primary">{buttonText}</Button>
        </div>
    )
}

export default CallToAction