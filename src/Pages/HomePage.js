import React from 'react'
import Header from '../Components/Header'
import Filter from '../Components/Filter'
import BookList from '../Components/BookList'

function HomePage() {
  return (
    <div>
      <Header/>
      <Filter/>
        <div className='homepage-container'>
          <h2>Unlimited Books</h2>
          <BookList/>
        </div>
    </div>

  )
}

export default HomePage