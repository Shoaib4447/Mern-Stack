import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchForm from './SearchForm';
import ImagesList from './ImagesList';
import './index.css';
import './Hemisphere.css';
import Hemisphere from './Hemisphere';
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

  state = {images:[]}

  onSearchSubmit = async (entry)=>{
    console.log(entry);
    const response = await axios.get(`https://pixabay.com/api/?key=32142471-60e6cca62669b22dc1dfa8408&q=${entry}&image_type=photo`);
    // console.log(response.data.hits);
    this.setState({images:response.data.hits})
  }

  render(){  
    return(
      <>
        <SearchForm title='FORM' onSearchSubmitProp = {this.onSearchSubmit}/>
        <ImagesList images = {this.state.images} />
      </>
    )
  }
}





ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)