import React from 'react';
import './App.css';
import Body from './Body/Body';
import Storefooter from './Footer/Storefooter';
import NavBar from './NavBar';



function App() {
  return (
    <div className="App">
    <NavBar/>
      <Body/>
      {/* <Storefooter/>   */}
    </div>
  );
}

export default App;
