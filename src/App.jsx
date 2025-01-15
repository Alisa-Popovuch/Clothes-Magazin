import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import Home from './Home';
import Sale from './Sale';
import Contact from './Contact';
import AboutProduct from './AboutProduct';


function App() {
  return <Router>
    <nav>
      <Link to="/" className='link'>Home</Link>
      <Link to="sale" className='link'>Sale</Link>
      <Link to="contact" className='link'>Contact Us</Link>
    </nav>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/sale' element={ <Sale/> } />
      <Route path='/contact' element={ <Contact/> } />
      <Route path='/about/:title' element={ <AboutProduct/> } />
    </Routes>
  </Router>
}

export default App;