import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';

class App extends Component {

  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </>
    );
  }
}

export default App;