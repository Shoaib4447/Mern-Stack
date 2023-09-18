import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faMapSigns,faClock} from '@fortawesome/free-solid-svg-icons';
import './Css/Footer.css';
import Logo from '../Asserts/logo2.png';
import { Link,NavLink } from 'react-router-dom';
const Footer = () => {

    
  return (
    <>
    <footer className='upper-footer-bg text-white s'>
        <div className='container '>
            <div className='grid'>
                <div className='row'>
                    {/* About Us */}
                    <div className='col-md-4 pe-5 p-4 col-sm-12'>
                        <h4>ABOUT <span className='text-warning b'> US</span></h4>
                        <Link to='#'>
                            <img className='img-fluid mt-2' width={65} src={Logo} alt='Logo Not Found' />
                        </Link>
                        <p className='mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, </p>
                        <h5 className='mt-3'>Follow<span className='text-warning'> US</span></h5>
                        <div className='d-flex align-content-center mt-3'>
                            <i className='bi bi-pinterest icons-hover fs-5'></i>
                            <i className='bi bi-linkedin icons-hover fs-5 mx-2'></i>
                            <i className='bi bi-facebook icons-hover fs-5 mx-2'></i>
                            <i className='bi bi-youtube icons-hover fs-5 mx-2'></i>
                            <i className='bi bi-twitter icons-hover fs-5 mx-2'></i>
                        </div>
                    </div>
                    {/* Contact Details */}
                    <div className='col-md-4 col-sm-12 d-flex flex-column pe-5 p-4 '>
                        <h4>CONTACT<span className='text-warning'> DETAILS</span></h4>

                        <a className='mt-4 text-decoration-none' href='tel:123456789'>
                            <FontAwesomeIcon className='text-warning fs-5 fa-1x' icon={faPhone}/>
                            <span className='ms-3 text-white'><b className='fs-5'>Phone</b> : 123-456-(789)</span>
                        </a>

                        <a className='mt-4 text-decoration-none' href='mailto:shoaiburrehman@gmail.com'>
                            <FontAwesomeIcon className='text-warning fs-5' icon={faEnvelope}/>   
                            <span className='ms-3 text-white'><b className='fs-5'>Email</b> : shoaiburrehman@gmail.com</span>
                        </a>
                        
                        <a className='mt-4 text-decoration-none'>
                            <FontAwesomeIcon className='text-warning fs-5 fs-5' icon={faClock}/>
                            <span className='ms-3 text-white'><b className='fs-5'>Official Time</b>: 08:00 AM -- 06:00 PM</span>
                        </a>
                        <a className='mt-4 text-decoration-none'>
                            <FontAwesomeIcon className='text-warning fs-5' icon={faMapSigns}/>
                            <span className='ms-3 text-white'><b className='fs-5'>Address</b> : Placeholder Address <span className='country-margin'>Country</span></span>
                        </a>
                    </div>

                    {/* Platforms */}
                    <div className='col-md-4 col-sm-12 p-4'>
                    <h4>APPS &<span className='text-warning'> PLATFORMS</span></h4>

                    <div className=' Apps cloux-app-box mt-4'>
                        <ul className='list-unstyled '>
                            <li>
                            <a className='text-decoration-none text-white' href='#' title='Apple Store' target='_blank'>
                                <i className='bi fs-3 bi-apple ms-5 mt-2 text-white d-inline-block'></i>
                                <div className='text d-inline-block mx-3'>Buy now via <strong>Apple Store</strong></div>
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div className=' Apps cloux-app-box mt-2'>
                        <ul className='list-unstyled '>
                            <li>
                            <a className='text-decoration-none text-white' href='#' title='Apple Store' target='_blank'>
                                <i className='bi bi-google-play fs-3 ms-5 mt-2 text-white d-inline-block'></i>
                                <div className='text d-inline-block mx-3'>Buy now via <strong>Google Play</strong></div>
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div className=' Apps cloux-app-box mt-2'>
                        <ul className='list-unstyled '>
                            <li>
                            <a className='text-decoration-none text-white' href='#' title='Apple Store' target='_blank'>
                                <i class='bi bi-windows fs-3 ms-5 mt-2 text-war d-inline-block'></i>
                                <div className='text d-inline-block mx-3'>Buy now via <strong>Windows</strong></div>
                            </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className='container-fluid bg-black'>
        <div className='container  p-3'>
            <div className='grid'>
            <div className='row'>
                {/* LOGO */}
                <div className='col-md-2 col-sm-12'>
                    <div className='container d-flex justify-content-center mt-2'>
                        <h3 className='text-white '>CLOU<span className='text-warning'>XGAME</span></h3>
                    </div>
                </div>
                {/* Alrights */}
                <div className='col-md-4 col-sm-12'>
                    <div className='container d-flex justify-content-center mt-2'>
                    <p className='text-white mt-2'>Copyright © 2018 Cloux - All rights reserved.</p>
                    </div>
                </div>
                {/* Navigation */}
                <div className='col-md-6'>
                    <div className='container-fluid'>
                        <ul className='navbar-nav d-flex flex-row mt-2 justify-content-end'>
                            <li className='nav-item mx-2'>  
                            <NavLink className= 'nav-link text-white ' aria-current='page' to='/'>Home</NavLink>
                            </li>
                            <li className='nav-item mx-2'>
                            <NavLink className= 'nav-link text-white ' aria-current='page' to='/helpcenter'>Help Center</NavLink>
                            </li>
                            <li className='nav-item mx-2'>
                            <NavLink className= 'nav-link text-white  ' aria-current='page' to='/contact'>Contact</NavLink>
                            </li>
                            <li className='nav-item mx-2'>
                            <NavLink className= 'nav-link text-white  ' aria-current='page' to='/career'>Career</NavLink>
                            </li>
                            <li className='nav-item mx-2'>
                            <NavLink className= 'nav-link text-white  ' aria-current='page' to='/store'>Store</NavLink>
                            </li>
                            <li className='nav-item ms-2'>
                            <NavLink className= 'nav-link text-white  ' aria-current='page' to='/advertise'>Advertise</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer
