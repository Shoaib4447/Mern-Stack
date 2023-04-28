import React from 'react';
import ReactDOM  from 'react-dom';
import Greeting  from './Greeting';
import Topic from './Topics';

const App = function(){
    return(
        <div>
            <Greeting>
                <Topic topic1='Component Nesting' topic2 = 'Component Resuseability' topic3 = 'Component Configration'/>
            </Greeting>
        </div>
        )
    }

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)