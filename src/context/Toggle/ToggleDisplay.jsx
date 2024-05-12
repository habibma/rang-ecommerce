import React, { useContext } from 'react'
import { ToggleContext } from './Toggle'

const ToggleDisplay = ({ children }) => {
    const { on } = useContext(ToggleContext)
    return children(on)
}

export default ToggleDisplay