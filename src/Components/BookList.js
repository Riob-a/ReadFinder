import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ book, handleBuy }) {
  const handleBuyClick = () => {
    const { id, category, picture ,title, description, price } = book;
    const bookDetails = {id, title,category, picture, description, price }; 
    handleBuy(id, bookDetails);
  };


    return (
        <div className="book-div">
          <div className="image-container">
            <img className="image" alt="" src={book.picture} />
          </div>
          <div className="item-container">
            <p>{book.title}</p>
            <Link to={`bookinfo/${book.id}`}>
              {" "}
              <small>{book.description}</small>
              </Link>
            <p>Ksh: {book.price}</p>
            <div className="div-button">
              <button className="buy-button"onClick={handleBuyClick}>Buy Now</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default BookList;


