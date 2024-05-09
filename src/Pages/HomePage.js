import React, { useState } from 'react';
import Header from '../Components/Header';
import Filter from '../Components/Filter';
import BookList from '../Components/BookList';

function HomePage({ books, handleBuy }) {
  const [bookData, setBookData] = useState({});

const sortBooksByCategory = () => {
  const sortedBooks = [...bookData].sort((a, b) => {
    return a.category.localeCompare(b.category);
  });
  setBookData(sortedBooks);
};

  return (
    <div>
      <Header />
      <Filter sortBooksByCategory={sortBooksByCategory}/>
      <div className="homepage-container">
        <h2>Unlimited Books</h2>

    <div className="column-grid">
      {books.map((book) => (
       <BookList key={book.id} book={book} handleBuy={(bookId, bookDetails) => handleBuy(bookId, bookDetails)}/>
      ))}
    </div>
  </div>
</div>
  );
}

export default HomePage; 