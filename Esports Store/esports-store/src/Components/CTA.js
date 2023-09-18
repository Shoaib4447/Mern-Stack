import React from 'react';
import './Css/CTA.css';
import {useFormik} from 'formik';

const CTA = () => {

  const formik = useFormik({
    initialValues:{
      name:'',
      last_name:'',
      email:''
    },
    onSubmit : values => {
      console.log('Form Data ',values);
    }
  });

  return (
    <>
      <section className='background-section-cta'>
        <div className='overlay-CTA'></div>
          <div className='container z-1'>
            <div className='grid'>
              <div className='row'>
                <div className='col d-flex justify-content-center'>
                  <h4 className='text-white'>NEWSLETTER:  </h4>
                  <form className=' z-3' 
                    onSubmit={formik.handleSubmit}>

                      <input className=' border-white border-2 py-2 px-4 ms-4' type="text" 
                      placeholder='Name' 
                      name="name" 
                      id="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      />
                      <input className=' border-white border-2 py-2 px-4 ms-4' type="text" 
                      placeholder='Last Name' 
                      name="last_name" 
                      id="last_name"
                      onChange={formik.handleChange}
                      value={formik.values.last_name}
                      />
                      <input className=' border-white border-2 py-2 px-4 ms-4'
                      type="text" 
                      placeholder='Your Email Address' 
                      name="email" 
                      id="email" 
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      />
                    <button className='btn btn-outline-white rounded-0 text-white border-1 border-white ms-4 py-2 px-4' type='submit'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default CTA









// Numerical Methods
// Principal of Management 
// Data Analysis // Web Engineering
