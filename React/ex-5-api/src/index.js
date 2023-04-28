import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hemisphere from './Hemisphere';
import './Hemisphere.css'
import northHemis from './images/north.png';
import southHemis from './images/south.jpg';



class App extends React.Component{
  constructor(props){
    super(props)


    this.state = {latitude:null,errorMessage:null,northbackcolor:null,southbackcolor:null}
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
    if(this.state.latitude && !this.errorMessage){
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
  }
}






ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)