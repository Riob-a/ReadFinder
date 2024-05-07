import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BookShelves from './Pages/BookShelves';
import FormData from './Pages/Form';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/MyShelves' element={<BookShelves/>} />
        <Route path='/form' element={<FormData/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App