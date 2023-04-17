import React from 'react';
import  ReactDOM  from 'react-dom';

const SingleComment = (props) => {
    return(
        <div className='comment'>
            <a className='avatar'><img src={props.pic}/></a>
            <div className='content'>
                <a className='author'>{props.name}</a>
                <div className='metadata'>
                    <span className='date'>{props.time}</span>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div>
)}

export default SingleComment;