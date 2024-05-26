import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';

const MenuDropdown = ({ children }) => {

  const { open , setFocused } = useContext(MenuContext);

  return open && <div className='menu-dropdown' onMouseEnter= {() => setFocused(true)} onMouseLeave={() => setFocused(false)}>{children}</div>
}

export default MenuDropdown