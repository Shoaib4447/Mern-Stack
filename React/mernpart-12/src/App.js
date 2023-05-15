// React
import React from 'react';
// Components
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
// React Router
import {BrowserRouter,Route, Routes} from 'react-router-dom';

// Functional Component
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/contact' Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
