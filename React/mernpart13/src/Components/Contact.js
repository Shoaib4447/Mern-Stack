import {React,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import { connect } from 'react-redux';
const Contact = ({cards}) => {

// Programmatic Redirects + React Parameter Redirects


  // const navigate = useNavigate();
  // useEffect(()=>{
  // const timeOut = setTimeout(()=>{
  //   navigate('/about');
  // },2000);
  // return ()=> clearTimeout(timeOut);
  // },[navigate]);

  return (
    <div className='container text-center'>
        <div className='row align-items-center'>
          <div className='col'>
            <h3 className='display-3'>Contact Details</h3>
            <p>All the contact details are written below</p>
          </div>
        </div>
        {/*  */}
        <div className='row align-items-center'>
        {
          cards.map(card =>{
            {/* console.log(card); */}
            return (
              <>
                <div className='col-sm-4' key={card.id}>
                  <h3 className='display-3'>{card.title}</h3>
                  <Link to={`/card/${card.title}`}>Contact {card.title} </Link>
                </div>
              </>
            )
          })
        }
          
        </div>
      </div>
  )
}

const mapStateToProp= (state)=>{
  return{
    cards:state.cards
  }
}

export default connect (mapStateToProp)(Contact);
