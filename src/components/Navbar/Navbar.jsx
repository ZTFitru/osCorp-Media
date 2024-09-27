import './Navbar.css'

const Navbar = ()=> {

    return (
        <header className='nav-outter'>
            <nav>
                <div className='search-btn'>
                    <button>🔍</button>
                </div>
                <div className='title'>
                    <h1>OsCorp Media</h1>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;