import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Products/Products';
import Career from './Components/Career';
import Contact from './Components/Contact';


const App = () => {

  return (

    <BrowserRouter>
    <>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/products' Component={Store}/>
          <Route path='/career' Component={Career} />
          <Route path='/contact' Component={Contact}></Route>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App;
