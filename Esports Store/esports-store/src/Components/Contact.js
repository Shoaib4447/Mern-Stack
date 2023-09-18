import React from 'react';
import { useFormik } from 'formik';
import './Css/Contact.css';
// Components
import Banner from './Banner';
import CTA from './CTA';
import Social from './Social';
// Font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faMapSigns,faClock} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const formik = useFormik({
    initialValues:{
      Name:'',
      Email:'',
      Number:'',
      Subject:'',
      Message:''
    },
    onSubmit: values => {
      console.log('Form Data: ', values)
    }
  })
  return(
    <>
      <Banner/>
      <section>
      <div className='container-fluid'>
        <div className='grid'>
          <div className='row'>
            <div className='col p-0'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.9538438127!2d74.00472092112636!3d31.482517952112563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693409737756!5m2!1sen!2s'
              width='100%'
              height='500'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'>  
            </iframe>
            </div>
          </div>
        </div>
      </div>
      </section> 
      
      <section className='section-padding'>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col-md-7 p-5 bg-body-tertiary">
            <h3>GET IN TOUCH <span className='text-warning'>WITH US</span></h3>
            <p>FEEL FREE TO CONTACT US</p>
              <form onSubmit={formik.handleChange}>
                <input 
                  className='w-48 my-3 py-2 px-4 field-border'
                  type="text"
                  name="Name" 
                  id="Name"
                  placeholder='Name'
                  onChange={formik.handleChange}
                  value={formik.values.Name}
                 />
                <input 
                  className='w-48 my-3 py-2 px-4 field-border rounded-0'
                  type="email"
                  name="Email" 
                  id="Email"
                  placeholder='Email'
                  onChange={formik.handleChange}
                  value={formik.values.Email}
                 />
                <input 
                  className='w-49 my-3 py-2 px-4  field-border rounded-0'
                  type="number"
                  name="Number" 
                  id="Number"
                  placeholder='Number'
                  onChange={formik.handleChange}
                  value={formik.values.Number}
                 />
                <input 
                  className='w-49 my-3 py-2 px-4  field-border rounded-0'
                  type="text"
                  name="Subject" 
                  id="Subject"
                  placeholder='Subject'
                  onChange={formik.handleChange}
                  value={formik.values.Subject}
                 />
                <input 
                  className='my-3 field-border message-field rounded-0'
                  type="textarea"
                  name="Message" 
                  id="Message"
                  placeholder='Message'
                  onChange={formik.handleChange}
                  value={formik.values.Message}
                 />
                 <button type='submit' className='btn btn-border rounded-0 my-3 text-black border-1 border-black py-2 px-4'>Submit</button>
              </form>
            </div>
            <div className="col-md-5 p-5 d-flex flex-column">
              <h4 className='text-black'>CONTACT<span className='text-warning'>DETAILS</span></h4>
                <a className='mt-4 text-decoration-none' href='tel:123456789'>
                    <FontAwesomeIcon className='text-warning fs-5 fa-1x' icon={faPhone}/>
                    <span className='ms-3 text-black'><b className='fs-5'>Phone</b> : 123-456-(789)</span>
                </a>

                <a className='mt-4 text-decoration-none' href='mailto:shoaiburrehman@gmail.com'>
                    <FontAwesomeIcon className='text-warning fs-5' icon={faEnvelope}/>   
                    <span className='ms-3 text-black'><b className='fs-5'>Email</b> : shoaiburrehman@gmail.com</span>
                </a>

                <a className='mt-4 text-decoration-none'>
                    <FontAwesomeIcon className='text-warning fs-5 fs-5' icon={faClock}/>
                    <span className='ms-3 text-black'><b className='fs-5'>Official Time</b>: 08:00 AM -- 06:00 PM</span>
                </a>
                <a className='mt-4 text-decoration-none'>
                    <FontAwesomeIcon className='text-warning fs-5' icon={faMapSigns}/>
                    <span className='ms-3 text-black'><b className='fs-5'>Address</b> : Placeholder Address <span className='country-margin'>Country</span></span>
                </a>
                <p className='mt-4'>Hello there! 🌟 We're absolutely delighted that you've stopped by. Your curiosity or interest in reaching out to us means the world to us. Whether you have a question, a brilliant idea to share, or you simply want to say 'hi,' we're all ears and ready to assist. So, let's start a conversation. Your message is the highlight of our day, and we can't wait to hear from you!</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <CTA/>
      <Social/>
    </>
  );  
};

export default Contact;