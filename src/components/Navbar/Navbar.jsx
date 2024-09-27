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
                    <li>General</li>
                    <li>Business</li>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li>Health</li>
                    <li>Science</li>
                    <li>Technology</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;