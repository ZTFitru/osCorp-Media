import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = ()=> {

    return (
        <header className='nav-outter'>
            <div className='top-nav'>
                <div className='title'>
                    <h1>OSCORP MEDIA</h1>
                </div>
            </div>
            <nav>
                <ul>
                    <li><NavLink to={'/general'} >General</NavLink></li>
                    <li><NavLink to={'/business'} >Business</NavLink></li>
                    <li><NavLink to={'/sports'} >Sports</NavLink></li>
                    <li><NavLink to={'/entertainment'} >Entertainment</NavLink></li>
                    <li><NavLink to={'/health'} >Health</NavLink></li>
                    <li><NavLink to={'/science'} >Science</NavLink></li>
                    <li><NavLink to={'/technology'} >Technology</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;