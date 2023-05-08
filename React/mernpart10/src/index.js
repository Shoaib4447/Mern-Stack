import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hemisphere from './Hemisphere';
import './Hemisphere.css'
import northHemis from './images/north.png';
import southHemis from './images/south.jpg';

// Updated this file using LC methods

// class App extends React.Component{
  
//   state = {latitude:null,errorMessage:null}
//   componentDidMount(){
//     window.navigator.geolocation.getCurrentPosition(
//       (position)=>{
//         this.setState({latitude:position.coords.latitude})
//       },
//       (error)=>{
//         this.setState({errorMessage:error.message})
//       }
//     )
//   }
//   render(){
//     if(this.state.latitude && !this.state.errorMessage){
//       document.body.style.backgroundColor='red';
//       if(this.state.latitude > 0 && this.state.latitude < 90)
//           return(
//               <div>
//                   <Hemisphere pic={northHemis} pole='Your are from north Hemisphere'></Hemisphere>
//               </div>
//           )
//       else{
//         document.body.style.backgroundColor='blue';
//         return(
//           <div>
//               <Hemisphere pic={southHemis} pole='Your are from south Hemisphere'></Hemisphere>
//           </div>
//         )
//       }
//     }
//     else if(!this.state.latitude && this.state.errorMessage){
//       document.body.style.backgroundColor = 'green'
//       document.body.style.color = 'white'
//       return(
//         <div>
//           <h1>{this.state.errorMessage}</h1>
//         </div>
//       )
//     }
//     else{
//       document.body.style.backgroundColor = 'black'
//       document.body.style.color = 'white'
//       return(
//         <>
//           <h1>Waiting for Permission!!!</h1>
//         </>
//       )
//     }
//   }
// }

/*-------------------------------------------------------*/
// Handling user Input
class App extends React.Component{

  state = {entry:''}

  onChangeInput = (event)=>{                       // Anything that will call this function will become it's event
    console.log(event.target.value);          // Input is calling this function so 'input' will become argument as whole to it
    this.setState({entry:event.target.value});
  }
  onFormSubmit = (event)=>{                      
    event.preventDefault();
    console.log(this.state.entry);
  }


/* Uncontrolled Element
  1.In uncontrolled Element the react doesn't know the value of input field any where
  2.HTML input element set it's value = " "  
*/


/* controlled Element
  1.In Controlled element the input value is controlled by the state which is object and we have key that control the value
  2.In HTML the value = "" input is defined by state object 

*/

  render(){
    return(
      <>
        <form onSubmit={this.onFormSubmit} action="">
          <input type="text" placeholder='Input'
            // it is event of onChangeInput and if we want to call it on specific time then () will not be used It is being passed as a reference and it will be called on that event and if we use onChangeInput() on the go function then we will use() 
            onChange={this.onChangeInput} // Entry value is updated}
            value={this.state.entry}      // Now input value is controlled by state in controlled environment
          />
        </form>
      </>
    )
  }
}





ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)