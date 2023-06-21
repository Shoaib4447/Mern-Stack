// Step 2
const initialState = {
    cards:[
        {id:1 , title:'Ali', body:'Ali body'},
        {id:2 , title:'Abdullah', body:'Abdullah body'},
        {id:3 , title:'Ahmed', body:'Ahmed body'}
    ],
    // todos:[],
    // posts:[]
}


// Step 3
// state = initialState this is default parameter assignment
const rootReducer = (state = initialState, action )=>{
    return state;   
}

export default rootReducer;