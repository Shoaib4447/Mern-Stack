import React from 'react';
import ContactImg from './Images/contact.jpg';
const Contact = () => {
  return (
  <div className='container text-center'>
        <div className='row align-items-start'>
            <div className='col'>
                <h3 className='display-3'>Contact</h3>
                <p>Contact Page is Loaded</p>
                <img className='img-fluid' src={ContactImg} alt="Img" />
            </div>
        </div>
    </div>
  )
}

export default Contact;
