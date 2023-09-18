import React from 'react';
import './Css/Banner.css';

const Banner = () => {
  return (
    <>      
        <div className="container-fluid banner-padding background-section text-white">
            <div className="overlay"></div>
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <h4 className='text-warning'>Games</h4>
                            <nav style={{ "--bs-breadcrumb-divider": "'>>'" }} aria-label="breadcrumb">
                                <ol className="breadcrumb list-unstyled">
                                    <li className="breadcrumb-item text-white"><a className='text-decoration-none text-white' href="#">Home</a></li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Library</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Banner;
