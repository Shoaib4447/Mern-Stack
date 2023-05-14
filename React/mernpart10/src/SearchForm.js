/* Uncontrolled Element
  1.In uncontrolled Element the react doesn't know the value of input field any where
  2.HTML input element set it's value = " "  
*/

/* controlled Element
  1.In Controlled element the input value is controlled by the state which is object and we have key that control the value
  2.In HTML the value = "" input is defined by state object 

*/
import React from "react";

class SearchForm extends React.Component{
    state = {entry:''}
    // Input Event
    onChangeInput = (event)=>{                       // Anything that will call this function will become it's event
        // console.log(event.target.value);          // Input is calling this function so 'input' will become argument as whole to it
        this.setState({entry:event.target.value});
    }
    // Form Event
    onFormSubmit = (event)=>{                      
        event.preventDefault();
        // console.log(this.state.entry);
        this.props.onSearchSubmitProp(this.state.entry);
    }

    render(){
        return(
        <>
            <h1 className='text-center'>{this.props.title}</h1>
            <form onSubmit={this.onFormSubmit} action=''>
            <input type="text" placeholder='Enter you Query'
                // it is event of onChangeInput for event. () are not used if we use function will be called on the go we want on event
                onChange={this.onChangeInput} // Entry value is updated}
                value={this.state.entry}      // Now input value is controlled by state in controlled environment
            />
            </form>
        </>
        )
    }
}

export default SearchForm;
