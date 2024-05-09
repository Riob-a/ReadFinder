import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookShelves from './Pages/BookShelves';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FormData from './Pages/Form';
import BookInfo from './Pages/BookInfo';


function App() {
  const handlePost = async (data) => {
    if (Object.keys(data).length > 0) {
      fetch("http://localhost:3001/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to add book');
          }
          return res.json();
        })
        .then((data) => {
          console.log("Book successfully added:", data);
        })
        .catch((error) => {
          console.error("Error adding book:", error);
        });
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/MyShelves' element={<BookShelves />} />
          <Route path='/form' element={<FormData handlePost={handlePost} />} />
          <Route path='/bookinfo' element={<BookInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
