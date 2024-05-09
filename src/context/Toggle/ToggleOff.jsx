import { useContext } from 'react'
import { ToggleContext } from './Toggle'

const ToggleOn = ({ children }) => {
    const { on } = useContext(ToggleContext)
    return on ? null : children;
}

export default ToggleOn