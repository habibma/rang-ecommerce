import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/Context';
import { nanoid } from 'nanoid';

const Nav = () => {
    const { itemNumbers } = useContext(GlobalContext)

    const [open, setOpen] = useState(false)

    const navItems = [
        [
            {
                id: nanoid,
                text: "Home",
                icon: '../src/assets/imgs/home.svg',
                href: '/'
            },
            {
                id: nanoid,
                text: "Admin",
                icon: '../src/assets/imgs/admin.svg',
                href: '/admin'
            },
        ],
        [
            {
                id: nanoid,
                text: "Cart",
                icon: '../src/assets/imgs/cart.svg',
                href: '/cart',
                count: itemNumbers,
            },
            {
                id: nanoid,
                text: "Profile",
                icon: '../src/assets/imgs/profile.svg',
                href: '/profile/dashboard'
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
                {navItems.map((element) => (
                    <ul>
                        {element.map(item => (
                            <NavLink to={item.href}>
                                <li key={item.id}>
                                    <img src={item.icon} alt="" />
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