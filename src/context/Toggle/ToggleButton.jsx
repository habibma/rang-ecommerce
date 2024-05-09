import React, { useContext } from 'react'
import { ToggleContext } from './Toggle'

const ToggleButton = ({ children }) => {
    const { toggle } = useContext(ToggleContext)
    return (
        <div onClick={toggle} onBlur={toggle}>{children}</div>
    )
}

export default ToggleButton