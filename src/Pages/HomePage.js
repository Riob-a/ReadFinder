import React from 'react';
import Header from '../Components/Header';
import Filter from '../Components/Filter';
import BookList from '../Components/BookList';

function HomePage({ books }) {
  return (
    <div>
      <Header />
      <Filter/>
      <div className="homepage-container">
        <h2>Unlimited Books</h2>

    <div className="column-grid">
      {books.map((book) => (
        <BookList key={book.id} book={book} />
      ))}
    </div>
  </div>
</div>
  );
}

export default HomePage; 