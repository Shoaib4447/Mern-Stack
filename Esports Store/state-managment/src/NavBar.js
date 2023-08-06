import React from 'react';
import Logo from './asserts/logo.png'

const Navbar = () => {

  // d-flex justify-content-around
  // d-flex justify-content-between
  
  var BlackNav = ()=>{ 
    var nav = document.querySelector('nav');
    console.log(nav)
  }
  BlackNav();
  

  return (
    <>
      <div className='navbar navbar-expand-lg navbar-dark p-md-3 '>
        <div className='container py-2'>
          <a href='#' className='navbar-brand'>
            <img className='img-fluid' width='70' src={Logo} alt='Brand Image'/>
          </a>
          <button
            type='button'
            className='navbar-toggler bg-black'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            
          >

            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <div className='mx-auto'></div>
            <ul  className='navbar-nav '>
              <li className='nav-item'>
                <a href='#' className='nav-link active text-dark mx-2'>HOME</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link text-dark mx-2'>TOURNAMENT</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link text-dark mx-2'>BLOG</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link text-dark mx-2'>SHOP</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link text-dark mx-2'>ABOUT</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link text-dark mx-2'>CONTACT</a>
              </li>
            </ul>
            <div className='mx-3'></div>
            <form className='d-flex' role='search'>
              <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'/>
              <button className='btn btn-outline-info' type='submit'>Search</button>
            </form>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
