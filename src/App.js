import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookShelves from './Pages/BookShelves';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FormData from './Pages/Form';
import BookInfo from './Pages/BookInfo';

function App() {
  const [addBook, setAddBook] = useState({});

  useEffect(() => {
    if (Object.keys(addBook).length > 0) {
      fetch("https://project2-db.onrender.com/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(addBook)
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to add book');
          }
          return res.json();
        })
        .then((data) => {
          console.log("Book successfully added:", data);
          
          // Optionally, you can perform any additional actions after successful addition
        })
        .catch((error) => {
          console.error("Error adding book:", error);
        });
    }
  }, [addBook]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/MyShelves' element={<BookShelves />} />
          <Route path='/form' element={<FormData setAddBook={setAddBook} />} />
          <Route path='/bookinfo' element={<BookInfo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
