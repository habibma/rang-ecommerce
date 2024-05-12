import React from 'react'
import Toggle from '../../context/Toggle'

const MenuDropdown = ({ children }) => {

  return (
    <Toggle.Display>
      {on => {
        if (on) return <div className='menu-dropdown'>{children}</div>
      }
      }
    </Toggle.Display>
  )
}

export default MenuDropdown