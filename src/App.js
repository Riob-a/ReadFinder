import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BookShelves from './Pages/BookShelves';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/MyShelves' element={<BookShelves/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App