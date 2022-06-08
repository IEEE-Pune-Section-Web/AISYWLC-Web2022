import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar__container">
        <nav className='navbar'>
            <Link className='navbar__logo' to="/">
                <img src="./Assets/Logo.png" alt="AISYWLC Logo" srcset="" />
            </Link>
            <ul className="navbar__links">
                <li className="navbar__link">
                    <NavLink  to='/'  >Home</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to='About'>About</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink  to='Venue'>Venue</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to='Sponsor'>Sponsor</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to='Speaker'>Speakers</NavLink>
                </li>
              
            </ul>
        </nav>
    </div>
  )
}

export default Navbar