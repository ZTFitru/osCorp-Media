import './Navbar.css'

const Navbar = ()=> {

    return (
        <header className='nav-outter'>
            <div className='top-nav'>
                {/* <div className='search-btn'>
                    <button>🔍</button>
                </div> */}
                <div className='title'>
                    <h1>OSCORP MEDIA</h1>
                </div>
            </div>
            <nav>
                <ul>
                    <li>Business</li>
                    <li>Sports</li>
                    <li>Entertainment</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;