import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hemisphere from './Hemisphere';
import './Hemisphere.css'
import northHemis from './images/north.png';
import southHemis from './images/south.jpg';

// Updated this file using LC methods

class App extends React.Component{
  
  state = {latitude:null,errorMessage:null}
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({latitude:position.coords.latitude})
      },
      (error)=>{
        this.setState({errorMessage:error.message})
      }
    )
  }
  render(){
    if(this.state.latitude && !this.state.errorMessage){
      document.body.style.backgroundColor='red';
      if(this.state.latitude > 0 && this.state.latitude < 90)
          return(
              <div>
                  <Hemisphere pic={northHemis} pole='Your are from north Hemisphere'></Hemisphere>
              </div>
          )
      else{
        document.body.style.backgroundColor='blue';
        return(
          <div>
              <Hemisphere pic={southHemis} pole='Your are from south Hemisphere'></Hemisphere>
          </div>
        )
      }
    }
    else if(!this.state.latitude && this.state.errorMessage){
      document.body.style.backgroundColor = 'green'
      document.body.style.color = 'white'
      return(
        <div>
          <h1>{this.state.errorMessage}</h1>
        </div>
      )
    }
    else{
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      return(
        <>
          <h1>Waiting for Permission!!!</h1>
        </>
      )
    }
  }
}






ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)