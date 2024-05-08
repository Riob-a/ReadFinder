// BookInfo.js
import React from 'react';
import './BookInfo.css';
import data from './db.json';

function BookInfo() {
    const handleDelete = (id) => {
        console.log(`Deleting book with id ${id}`);
    };

    const handleBuyNow = (id) => {
        console.log(`Buying book with id ${id}`);
    };

    return (
        <div>
            <h1>Book Information</h1>
            <div className="books">
                {data.books.map(book => (
                    <div key={book.id} className="book">
                        <img src={book.picture} alt={book.title} />
                        <div className="book-details">
                            <h2>{book.title}</h2>
                            <p>Category: {book.category}</p>
                            <p>Description: {book.description}</p>
                            <p>Price: ${book.price}</p>
                            <button onClick={() => handleBuyNow(book.id)}>Buy Now</button>
                            <button onClick={() => handleDelete(book.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => console.log('Back to home')}>Back Home</button>
        </div>
    );
}

export default BookInfo;
