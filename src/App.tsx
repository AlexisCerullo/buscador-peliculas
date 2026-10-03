// import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Body from './components/layout/Body';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Body />
      <Footer />
    </BrowserRouter>
  )
}

export default App
