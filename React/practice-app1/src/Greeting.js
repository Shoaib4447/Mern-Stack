import React from "react";
import ReactDOM from "react-dom";

const Greeting = function(props){
    console.log(props);
    return(
        <div>
            <h1>Welcome {props.name}! to React developers Community.</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Greeting;