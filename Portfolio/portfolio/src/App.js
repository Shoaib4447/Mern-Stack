import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;