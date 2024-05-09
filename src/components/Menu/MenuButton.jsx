import React from 'react'
import Button from '../button/Button'
import Toggle from '../../context/Toggle'

const MenuButton = ({ children }) => {

    return (
        <Toggle.Button>
            <Button>{children}</Button>
        </Toggle.Button>
    )
}

export default MenuButton