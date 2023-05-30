import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='navbar navbar-dark bg-dark sticky-top navbar-expand-lg '>
            <div className='container-fluid'>
                <NavLink className='navbar-brand' to='/'>Portfolio</NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto me-auto mb-2 mb-lg-0'>
                        <li className='nav-item px-3'>
                        <NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink>
                        </li>
                        <li className='nav-item px-3'>
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                        </li>
                        <li className='nav-item px-3'>
                        <NavLink className='nav-link' to='/projects'>Projects</NavLink>
                        </li>
                        <li className='nav-item px-3'>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar;