import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBasketShopping, faHamburger } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState("-100%");

    const toggleNav = () => {
        setIsNavOpen(prevState => prevState === "-100%" ? "0" : "-100%");
        console.log(isNavOpen);
    };

    return (
        <nav>
            <NavLogo />
            <Hamburger onClick={toggleNav} isNavOpen={isNavOpen}/>
            <NavContent isNavOpen={isNavOpen} onClick={toggleNav}/>
        </nav>
    );
}

function NavLogo(){
    return(
        <div className="nav-logo">
            <Link to="/home">
                <img src="src/img/t&q-logo.png" alt="Logo" />
            </Link>
        </div>
    );
}

function NavContent({isNavOpen, onClick}){
    return(
        <div className="nav-content" style={{right: isNavOpen}}>
            <div className="nav-logo-resp">
                <Link to="/home">
                    <img src="src/img/t&q-logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/home" onClick={onClick}>Home</Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={onClick}>Products</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={onClick}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={onClick}>About</Link>
                    </li>
                </ul>
            </div>
            <div className="search-bar">
                <input 
                type="text"
                placeholder='Search something...'
                />
                <button>Search</button>
            </div>

            <Basket onClick={onClick} />

            <div className="nav-user">
                <Link to="/sign-in" onClick={onClick}>Sign In</Link>
                <Link to="/sign-up" onClick={onClick}>Sign Up</Link>
            </div>
        </div>
    );
}

function Basket({onClick}){
    return(
        <div className="nav-basket">
            <Link to="/basket" onClick={onClick}>
                <FontAwesomeIcon icon={faBasketShopping}  style={{color: "000"}}/>
            </Link>
        </div>
    );
}

function Hamburger({onClick, isNavOpen}) {
    return (
        <div className='hamburger' onClick={onClick}>
            <span>
             {isNavOpen === "-100%" ? "≡" : "x"}
            </span>
        </div>
    );
}
