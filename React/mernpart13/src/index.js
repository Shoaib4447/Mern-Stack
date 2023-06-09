import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Step 1
import {legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';

// Step 2

const initialState = {
  todos:[],
  posts:[]
}

// Step 3
// state = initialState this is default parameter assignment
function reducer (state = initialState,action){
  if(action.type === 'ADD_TODO'){
    return{
      ...state,
      todos:[...state.todos,action.payload]
    }
  }
  if(action.type === 'ADD_POST'){
    return{
      ...state,
      posts:[...state.posts,action.payload]
    }
  }
}

// Just an ability to create store not created the Redux store = createStore
const store = createStore(reducer);

store.subscribe(()=>{
  console.log(store.getState());
})


// Actions
store.dispatch({ type:'ADD_TODO', payload:'Learn React'});
store.dispatch({ type:'ADD_TODO', payload:'Learn Redux'});
store.dispatch({ type:'ADD_POST', payload:'Learn Post'});
store.dispatch({ type:'ADD_POST', payload:'Learn ADD_POST'});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
