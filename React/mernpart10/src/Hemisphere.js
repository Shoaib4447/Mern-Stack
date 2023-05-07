import React from 'react';



const Hemisphere = (props)=>{
    return(
    <div className='card'>
        <img src={props.pic} className='card-img-top img-fluid' alt='Not Working'/>
        <div className='card-body bg-primary'>
            <h3 id='divHeading' className='card-title text-center text-white'>{props.pole}</h3>
        </div>
    </div>
    )
}

export default Hemisphere;