import React from 'react';
import { ReactDOM } from 'react-dom';
import northHemis from './images/north.png';
import southHemis from './images/south.jpg';




const Hemisphere = (props)=>{
    return(
    <div className='card'>
        <img src={props.pic} className='card-img-top' alt='Not Working'/>
        <div className='card-body bg-primary'>
            <h3 id='divHeading' className='card-title text-center text-white'>{props.pole}</h3>
        </div>
    </div>
    )
}

export default Hemisphere;