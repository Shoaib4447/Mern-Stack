// Step:1 Import Dependencies
import React from 'react';
import  ReactDOM  from 'react-dom';
// Components
import FriendCard from './FriendCard';
import SingleComment from './SingleComment';
// Images
import profilePic from './images/logo192.png';
import profilePic2 from './images/logo512.png';
import profilePic3 from './images/code.png';
import profilePic4 from './images/profile.png'

// Step:2 Make a component
const App = function(){
    return(
        // JSX => very close to HTML
        <div className='ui comments'>
            <FriendCard>
                <SingleComment pic={profilePic3} name='Nadeem' time='Yesterday' text='Good Job'/>
                <SingleComment pic={profilePic4} name='Shoaib' time='Yesterday' text='Good Job'/>
            </FriendCard>
            <FriendCard>
                <SingleComment pic={profilePic} name='Ali' time='Today at 5:00PM' text='Thanks'/>
                <SingleComment pic={profilePic2} name='Abdullah' time='Today at 4:00PM' text='Amazing'/>
            </FriendCard>
            
        </div>
    )
}

// Step:3 Show UP
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

