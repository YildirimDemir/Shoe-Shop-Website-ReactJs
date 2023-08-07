import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBasketShopping, faHamburger } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState("-100%");

    const toggleNav = () => {
        let right="0";
        if (isNavOpen==="-100%") {
            setIsNavOpen(right);

        } else if(isNavOpen==="0"){
            right="-100%"
            setIsNavOpen(right)
        }

        console.log(isNavOpen)
    };

    return (
        <nav>
            <NavLogo />
            <Hamburger onClick={toggleNav}/>
            <NavContent isNavOpen={isNavOpen}/>
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
    )
}

function NavContent({isNavOpen}){
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
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
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

            <Basket />

            <div className="nav-user">
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
            </div>
            </div>
    )
}

function Basket(){
    return(
        <div className="nav-basket">
        <Link to="/basket">
            <FontAwesomeIcon icon={faBasketShopping}  style={{color: "000"}}/>
        </Link>
        </div>
    )
}

function Hamburger({onClick}) {
    return (
        <div className='hamburger' onClick={onClick}>
            <img src="src/img/menu-icon-removebg-preview.png" alt="Menu" />
        </div>
    );
}