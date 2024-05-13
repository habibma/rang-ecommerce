import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';

const MenuDropdown = ({ children }) => {

  const { open } = useContext(MenuContext);

  return open && <div className='menu-dropdown'>{children}</div>
}

export default MenuDropdown