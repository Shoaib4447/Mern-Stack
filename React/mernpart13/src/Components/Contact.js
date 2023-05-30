import {React,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';
const Contact = () => {

// Programmatic Redirects + React Parameter Redirects


  // const navigate = useNavigate();
  // useEffect(()=>{
  // const timeOut = setTimeout(()=>{
  //   navigate('/about');
  // },2000);
  // return ()=> clearTimeout(timeOut);
  // },[navigate]);

  return (
    <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            <h3 className='display-3'>Contact Details</h3>
            <p>All the contact details are written below</p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col">
            <h3 className='display-3'>HR</h3>
            <Link to='/card/Ali'> Ali is here</Link>
          </div>
          <div class="col">
            <h3 className='display-3'>IT</h3>
            <Link to='/card/Abdullah'> Abdullah is here</Link>
          </div>
        </div>
      </div>
  )
}

export default Contact;
