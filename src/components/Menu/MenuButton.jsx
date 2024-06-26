import React, { useContext } from 'react'
import Button from '../button/Button'
import { MenuContext } from '../../context/MenuContext'

const MenuButton = ({ children, shape }) => {

    const { toggleOpen, focused } = useContext(MenuContext);

    return (
        <Button
            onFocus={toggleOpen}
            onBlur={!focused && open ? toggleOpen : undefined}
        >
            {children}
            {shape === 'arrow' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>}
        </Button>
    )
}

export default MenuButton