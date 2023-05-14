import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './ImageList';
import SearchForm from './SearchForm';

class App extends React.Component{
    state = {images:[]}
    onSearchSubmit = async (entry)=>{
        console.log(entry);
        const response = await axios.get(`https://pixabay.com/api/?key=32142471-60e6cca62669b22dc1dfa8408&q=${entry}&image_type=photo&pretty=true`);
        this.setState({images:response.data.hits});
    }

    render(){
        return(
            <>
              <SearchForm title='Form' onSearchSubmitProp = {this.onSearchSubmit}/>  
              <ImageList images = {this.state.images}/>
            </>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)