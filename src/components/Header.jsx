import Nav from "./Nav";

const Header = () => {
    return (
        <header className="header">
            <div className="nav-container on-terracotta">
                <h1 className="website-title">Rang</h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header;