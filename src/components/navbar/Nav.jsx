import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/Context';
import { nanoid } from 'nanoid';

import './nav.scss'

const Nav = () => {
    const { itemNumbers } = useContext(GlobalContext)

    const [open, setOpen] = useState(false)

    const navItems = [
        [
            {
                id: nanoid(),
                text: "Home",
                icon: 'home',
                href: '/'
            },
            {
                id: nanoid(),
                text: "Admin",
                icon: 'admin',
                href: 'admin'
            },
        ],
        [
            {
                id: nanoid(),
                text: "Cart",
                icon: 'cart',
                href: 'cart',
                count: itemNumbers,
            },
            {
                id: nanoid(),
                text: "Profile",
                icon: 'profile',
                href: 'profile'
            }

        ]
    ]


    return (
        <nav className="nav">
            <div className='hamberger-menu' onClick={() => setOpen(prevState => !prevState)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={open ? 'menu opened-menu' : "menu"}>
                {navItems.map((element, index) => (
                    <ul key={index}>
                        {element.map(item => (
                            <NavLink to={item.href} key={item.id}>
                                <li>
                                    <img src={`/${item.icon}.svg`} alt="" />
                                    {item.count && <span className='counter'>{item.count}</span>}
                                    <span>{item.text}</span>
                                </li>
                            </NavLink>)
                        )}
                    </ul>
                ))}
            </div>
        </nav>
    )
}

export default Nav;