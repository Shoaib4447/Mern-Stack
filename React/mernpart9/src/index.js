import React from 'react';
import  ReactDOM  from 'react-dom';
import Hemisphere from './Hemisphere';
import './Hemisphere.css';


// Class Based Functions
class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {latitude:null,longitude:null,errorMessage:null}
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({latitude:position.coords.latitude})
                this.setState({longitude:position.coords.longitude})
            },
            (error)=>{
                this.setState({errorMessage:error.message})
            }
        )
    }
    render(){
        if(this.state.latitude && !this.errorMessage){
            return(
                <div>
                    {this.state.latitude}
                </div>
            )
        }
        else if(!this.state.latitude && this.errorMessage){
            return(
                <div>
                    {this.state.errorMessage}
                </div>
            )
        }
        else {
            return(
                <div>
                    <h2>Waiting for permission...</h2>
                </div>
            )
        }
    }
}



ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)