import React from 'react';
import leftImg from './Images/2.jpg';

const Contact = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row text-center bg-body-secondary py-5'>
          <div className='col-md-6 bg-primary text-white'>
            <h1>Left Side</h1>
            <img className='img-fluid' src={leftImg} alt='left side img' />
          </div>
          <div className='col-md-6 bg-info text-white'>
            <h1>Right Side</h1>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput' className='form-label'>Example label</label>
              <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Example input placeholder' />
            </div>
            <div className='mb-3'>
              <label htmlFor='formGroupExampleInput2' className='form-label'>Another label</label>
              <input type='text' className='form-control' id='formGroupExampleInput2' placeholder='Another input placeholder' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
