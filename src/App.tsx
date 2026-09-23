// import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default App
