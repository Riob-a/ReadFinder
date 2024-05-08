import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ book }) {



    return (
        <div className="book-div">
          <div className="image-container">
            <img className="image" alt="" src={book.picture} />
          </div>
          <div className="item-container">
            <p>{book.title}</p>
              <Link  to="">
              {" "}
              <small>{book.description}</small>
              </Link>
            <p>{book.price}</p>
            <div className="div-button">
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default BookList;


