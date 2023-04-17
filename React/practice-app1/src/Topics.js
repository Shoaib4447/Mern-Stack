import React from "react";
import { ReactDOM } from "react-dom";

const Topic = function(props){
    // console.log(props);
    return(
        <div>
            <p>I have learned <strong>{props.topic1}</strong></p>
            <p>I have learned <strong>{props.topic2}</strong></p>
            <p>I have learned <strong>{props.topic3}</strong></p>
        </div>
    )
}

export default Topic;