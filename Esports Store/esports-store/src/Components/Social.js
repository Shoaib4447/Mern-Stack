import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Social.css';

const Social = () => {
  return (
    <>
         {/* Social Section */}
    <div className="container social-container-padding">
        <div className="grid">
            <div className="row">
                <div className="col-md-2 d-flex p-5 flex-column align-items-center">
                    <Link to='#' className='d-flex flex-column align-items-center text-decoration-none text-black'>
                        <i className='bi bi-facebook text-warning fa-3x'></i>
                        <p className='social_heading_size'>FACEBOOK</p>
                    </Link>
                </div>
                <div className="col-md-2 d-flex p-5 flex-column align-items-center">
                    <Link to='#' className='d-flex flex-column align-items-center text-decoration-none text-black'>
                        <i className='bi bi-youtube text-warning fa-3x'></i>
                        <p className='social_heading_size'>YOUTUBE</p>
                    </Link>
                </div>
                <div className="col-md-2 d-flex p-5 flex-column align-items-center">
                    <Link to='#' className='d-flex flex-column align-items-center text-decoration-none text-black'>
                        <i className='bi bi-twitter text-warning fa-3x'></i>
                        <p className='social_heading_size text-uppercase'>twitter</p>
                    </Link>                
                </div>
                <div className="col-md-2 d-flex p-5 flex-column align-items-center">
                    <Link to='#' className='d-flex flex-column align-items-center text-decoration-none text-black'>
                        <i className='bi bi-linkedin text-warning fa-3x'></i>
                        <p className='social_heading_size text-uppercase'>linkedin</p>
                    </Link>
                </div>
                <div className="col-md-2 d-flex p-5 flex-column align-items-center">
                    <Link to='#' className='d-flex flex-column align-items-center text-decoration-none text-black'>
                        <i className='bi bi-instagram text-warning fa-3x'></i>
                        <p className='social_heading_size text-uppercase'>instagram</p>
                    </Link>
                </div>
                <div className="col-md-2 d-flex p-5 flex-column align-items-center">
                    <Link to='#' className='d-flex flex-column align-items-center text-decoration-none text-black'>
                        <i className='bi bi-pinterest text-warning fa-3x'></i>
                        <p className='social_heading_size text-uppercase'>pinterest</p>
                    </Link>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Social;
