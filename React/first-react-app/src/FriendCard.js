import React from 'react';
import { ReactDOM } from 'react';
import SingleComment from './SingleComment';

const FriendCard = (props)=>{
    console.log(props);
    return(
        <div className='ui cards'>
            <div className='card'>
                <div className='content'>
                <div className='header'>Shoaib</div>
                <div className='description'>
                    {props.children}
                </div>
                </div>
                <div className='ui bottom attached button'>
                <i className='add icon'></i>
                Add Friend
                </div>
            </div>
        </div>
    )
}

export default FriendCard;