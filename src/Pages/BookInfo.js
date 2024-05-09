// BookInfo.js
import React from 'react';
import './BookInfo.css';


function BookInfo() {
    const handleDelete = (id) => {
        //console.log(Deleting book with id ${id});
    };

const handleBuyNow = (id) => {
    console.log(`Buying book with id ${id}`);
};

return (
    <div>
        <h1 className='h1'>Book Information</h1>
        <div className="books">
          
                <div className="book">
                    <img src='https://github.com/MohamedAhmeDdev/eBook-Next-/blob/master/server/Images/1671463217357.jpg?raw=true' />
                    <div className="book-details">
                        <h2>book.title</h2>
                        <p><span style={{fontWeight: 'bold'}}>Category:</span> book.category</p>
                        <p><span style={{fontWeight: 'bold'}}>Description:</span> book.description</p>
                        <p><span style={{fontWeight: 'bold'}}>Price:</span> $book.price</p>
                        <button>Buy Now</button>
                        <button>Delete</button>
                        <button onClick={() => console.log('Back to home')}>Back Home</button>
                    </div>
                </div>

               
        </div>
    </div>
);
}

export default BookInfo;

