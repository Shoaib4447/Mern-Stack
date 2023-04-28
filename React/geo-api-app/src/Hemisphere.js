import React from "react";
import ReactDOM from 'react-dom'
import northHem from './images/north.png'
import southHem from './images/south.jpg'


const Hempishere = ()=>{
    return(
        <div className='divitem'>
            <div className='bg-danger img_dim'>
                <img src={northHem} alt="norht Not working"/>
            </div>
            <div className='bg-secondary'>
                <h1 className=' text-primary text-center'>StateMent</h1>
            </div>
        </div>
    )
}


export default Hempishere;
