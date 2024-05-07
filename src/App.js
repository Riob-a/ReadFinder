import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BookShelves from './Pages/BookShelves';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/MyShelves' element={<BookShelves/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App