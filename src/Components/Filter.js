import React from 'react';

function Filter({ sortBooksByCategory} ) {

    const handleSort = (c) => {
      sortBooksByCategory (c);
    }
          

  return (
    <div className="container">
      <p>Filter Book By Category</p>
    <div className='button-container'> 
      <button onClick={()=>handleSort('All')} >All</button>
      <button onClick={()=>handleSort('Action')}>Action</button>
      <button onClick={()=>handleSort('Fantasy')} >Fantasy</button>
      <button onClick={()=>handleSort('Finance')}>Finance</button>
      <button onClick={()=>handleSort('Horror')}>Horror</button>
      <button onClick={()=>handleSort('Thriller')}>Thriller</button>
      <button onClick={()=>handleSort('Theological')}>Theological</button>
      
    </div>
   </div>
  );
}

export default Filter;