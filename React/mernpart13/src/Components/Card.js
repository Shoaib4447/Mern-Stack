import {React,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
const Card = () => {
  // Destructing Assignment
    const {user} = useParams();

    const [userData, setUserData] = useState('');
    useEffect(()=>{
        setUserData(user);
    },[user])

    return (
        <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            <h3 className='display-3-3'>{userData} Card</h3>
            <p>{userData} is here to help you</p>
          </div>
        </div>
      </div>
    );
};

export default Card;
