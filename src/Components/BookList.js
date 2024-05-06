import React from 'react'

function BookList() {
  return (
  <div className="column-grid">
      <div className="book-div">
              <div className="image-container">
                  <img className='image' alt="" src='https://github.com/MohamedAhmeDdev/eBook-Next-/blob/master/server/Images/1671463217357.jpg?raw=true'  />
              </div>
              <div className="item-container">
                  <p>name</p>
                  <small>Ipsum duis nulla non reprehenderit labore incididunt.Ex amet sit minim et. </small>
                  <p>ksh 1000</p>
              </div>
      </div>

      <div className="book-div">
              <div className="image-container">
                  <img className='image' alt="" src='https://raw.githubusercontent.com/MohamedAhmeDdev/eBook-Next-/master/server/Images/1671472657469.webp'  />
              </div>
              <div className="item-container">
                  <p>name</p>
                  <small>Ipsum duis nulla non reprehenderit labore incididunt.Ex amet sit minim et. </small>
                  <p>ksh 1000</p>
              </div>
      </div>

      <div className="book-div">
              <div className="image-container">
                  <img className='image' alt="" src='https://raw.githubusercontent.com/MohamedAhmeDdev/eBook-Next-/master/server/Images/1671476451167.webp'  />
              </div>
              <div className="item-container">
                  <p>name</p>
                  <small>Ipsum duis nulla non reprehenderit labore incididunt.Ex amet sit minim et. </small>
                  <p>ksh 1000</p>
              </div>
      </div>
  </div>

  )
}

export default BookList



