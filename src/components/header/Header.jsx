import { Link } from 'react-router-dom';
import Nav from '../navbar/Nav'
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="nav-container on-terracotta">
                <Link to='/'><h1 className="website-title">Rang</h1></Link>
                <Nav />
            </div>
        </header>
    )
}

export default Header;