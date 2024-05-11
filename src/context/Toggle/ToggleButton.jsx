import React, { useContext } from 'react'
import { ToggleContext } from './Toggle'

const ToggleButton = ({ children }) => {
    const { toggle, setOn } = useContext(ToggleContext)
    return (
        <div onClick={toggle} onBlur={() => setOn(false)}>{children}</div>
    )
}

export default ToggleButton