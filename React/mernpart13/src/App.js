import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Card from './Components/Card';
import NavBar from './Components/NavBar';
import ApiTest from './ApiTest';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route  path='/' Component={Home}></Route>
        <Route  path='/about' Component={About}></Route>
        <Route  path='/blog' Component={Blog}></Route>
        <Route  path='/contact' Component={Contact}></Route>
        <Route  path='/api' Component={ApiTest}></Route>
        <Route  path='/card/:user' Component={Card}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;