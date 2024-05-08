import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookShelves from "./Pages/BookShelves";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FormData from "./Pages/Form";
import BookInfo from "./Pages/BookInfo";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
 

  const getBooks = async () => {
    try {
      const response = await fetch("https://project2-db.onrender.com/books");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

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


  const handleBuy = async (bookId, bookDetails) => {
    console.log();
    try {
      const bookData = {
        id: bookDetails.id,
        title: bookDetails.title,
        category: bookDetails.category,
        picture: bookDetails.picture,
        description: bookDetails.description,
        price: bookDetails.price
      };

      await fetch(`http://localhost:3001/MyShelf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( bookData ),
      });

      await fetch(`http://localhost:3001/books/${bookId}`,{ method:'DELETE'});

       alert('You have Added The Book To Your Shelf')
       getBooks()
    } catch (error) {
      console.error('Error buying book:', error);
    }
  };



  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage books={books} handleBuy={handleBuy}/>}/>
          <Route path="/MyShelves" element={<BookShelves />} />
          <Route path="/form" element={<FormData handlePost={handlePost} />} />
          <Route path="/bookinfo/:id"  element={<BookInfo handleBuyNow={handleBuy} getBooks={getBooks} />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;