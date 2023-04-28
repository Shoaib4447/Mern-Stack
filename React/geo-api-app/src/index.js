import React from 'react'
import  ReactDOM  from 'react-dom'
import Hempishere from './Hemisphere'

// const App = ()=>{
//     return(
//         <div>H1</div>
//     )
// }

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
        return(
            <div>
                <Hempishere></Hempishere>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)