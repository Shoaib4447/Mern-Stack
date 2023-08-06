import React from 'react';
import Logo from '../asserts/logo.png'
import './Storefooter.css'

const Storefooter = () => {
  return (
    <>
    {/* Uper Footer */}
    <div className='footer-background py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='grid'>
          <div className='row '>
          {/* Brand Col */}
            <div className='col-md-3 '>
              <img className='img-fluid w-50' src={Logo} alt='Logo' />
            </div>
            {/* Nav Col */}
            <div className='col-md-7 d-flex align-items-center'>
              <ul className='d-flex list-unstyled '>
                <li className='ms-4'><a href=''>MAIN HOME</a></li>
                <li className='ms-4'><a href=''>BOOSTING</a></li>
                <li className='ms-4'><a href=''>ESPORTS</a></li>
                <li className='ms-4'><a href=''>GAMERS</a></li>
                <li className='ms-4'><a href=''>MAGAZINE</a></li>
              </ul>
            </div>
            {/* Button Col */}
            <div className='col-md-2 d-flex align-items-center justify-content-center'>
            <button type="button" className=" btn1">BUY THEME</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Lower Footer */}
    <div className="copyright p-3">
        <ul className="container list-unstyled d-flex align-items-center justify-content-between text-white">
            <li><span style={{ color: '#3b3454' }}>@{new Date().getFullYear()}</span> Honest Dev.</li>
            <li style={{ color: '#3b3454' }}>All right reserved</li>
        </ul>
    </div>
    </>
  );
};

export default Storefooter;
