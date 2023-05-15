import React from 'react';
import AboutImg from './Images/about.jpg';
const About = () => {
  return (
    <div className='container text-center'>
        <div className='row align-items-start'>
            <div className='col'>
                <h3 className='display-3'>About</h3>
                <p>About Page is Loaded</p>
                <img className='img-fluid' src={AboutImg} alt="Img" />
            </div>
        </div>
    </div>
  )
}

export default About;
