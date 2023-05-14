import React from 'react';

class SearchForm extends React.Component{
    state = {entry:''}
    onChangeInput = (event)=>{
        // console.log(event.target.value);
        this.setState({entry:event.target.value});
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        // console.log(this.state.entry);
        this.props.onSearchSubmitProp(this.state.entry);
    }


    render(){
        return(
            <>
                <h1>{this.props.title}</h1>
                <form 
                    onSubmit={this.onFormSubmit} 
                    action=''>

                    <input 
                        type='text' 
                        placeholder='Input'
                        onChange={this.onChangeInput}
                        value={this.state.entry}
                    />
                </form>
            </>
        )
    }
}

export default SearchForm;