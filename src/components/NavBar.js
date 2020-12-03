import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();

    },[])

    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <h1> ACP <i class="fas fa-dice-d20"></i></h1>
                    </Link>
                    <div className='menu-icon'  onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li className='nav-items'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                       </li>

                       <li className='nav-items'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                       </li>

                       <li className='nav-items'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                       </li>

                       <li className='nav-items'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                       </li>

                       <li className='nav-items'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                       </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar
