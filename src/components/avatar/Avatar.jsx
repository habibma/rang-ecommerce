import React from 'react'
import './avatar.css'
import user from '../../assets/imgs/user.png'

function Avatar({src, alt, children, ...otherProps}) {
    if (src) {
        return (
            <div className="avatar" {...otherProps}>
                <img src={src} alt={alt} />
            </div>
        )
    }
    if (children) {
        return (
            <div className="avatar avatar-letters" {...otherProps}>
                {children}
            </div>
        )
    }
    else {
        return (
            <div className="avatar" {...otherProps}>
                <img src={user} alt="" />
            </div>
        )
    }
}

export default Avatar