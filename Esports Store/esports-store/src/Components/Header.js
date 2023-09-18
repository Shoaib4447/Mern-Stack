import React from 'react';
import Logo from '../Asserts/logo.png';
import './Css/Header.css';
import { NavLink,Link } from 'react-router-dom';

const Header = () => {
    
  return (
    <>
    {/* Upper Header */}
     
      <div className='container-fluid mobile-responsive-1 bg-black py-3'>
        <div className='container'>
          <div className='grid'>
            <div className='row '>
              <div className='col-md-4 col-lg-4 col-xl-4 d-none d-sm-block'>
                <div className='Header-Icons mt-4'>
                  <Link to='#'><i className='bi bi-pinterest icons-hover fs-5 '></i></Link>
                  <Link to='https://www.linkedin.com/in/shoaib-ur-rehman-59a591232/'><i className='bi bi-linkedin icons-hover fs-5 mx-2 '></i></Link>
                  <Link to='#'><i className='bi bi-twitter icons-hover fs-5 mx-2 '></i></Link>
                  <Link to='#'><i className='bi bi-youtube icons-hover fs-5 mx-2 '></i></Link>
                  <Link to='#'><i className='bi bi-facebook icons-hover fs-5 mx-2 '></i></Link>
                </div>
              </div>
              <div className='col-md-4 col-lg-4 col-xl-4 col-sm-4 d-flex justify-content-center align-content-center'>
                <img src={Logo} width={80} alt='Logo Not Found' />
              </div>
              <div className='col-md-4 col-lg-4 col-xl-4 mt-4 col-sm-4 d-sm-block d-flex justify-content-end align-items-end'>
                <i className='bi bi-cart-plus-fill fs-4 me-4 icons-hover'></i>
                <button type='button' className='btn btn1 btn-warning text-white '>LOGIN</button>
                <button type='button' className='btn btn2 btn-warning text-white '>SIGNUP</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Header */}
      <div className='container-fluid mobile-responsive-2 center-desktop bg-warning'>
        <div className='grid'>
          <div className='row'>
            <div className='col-md-12'>
              <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                  <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                  </button>
                  <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                      <li className='nav-item'>
                        <NavLink className='nav-link text-black text-uppercase mx-2' aria-current='page' to='/s'><strong>Home</strong></NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link text-black text-uppercase  mx-2' to='/about'><strong>About Us</strong></NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link text-black text-uppercase mx-2' to='/store'><strong>Store</strong></NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link text-black text-uppercase mx-2' to='/career'><strong>Career</strong></NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink className='nav-link text-black text-uppercase mx-2' to='/contact'><strong>Contact Us</strong></NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
