import React, { useState } from 'react';

function Filter() {

function SortBar({ sortBots }) {              
    const handleSort = (c) => {
      sortBots(c);
    }


  return (
    <div className="container">
      <p>Filter Book By Category</p>
    <div className='button-container'> 
      <button onClick={()=>handleSort('All')} >All</button>
      <button onClick={()=>handleSort('Action')}>Action</button>
      <button onClick={()=>handleSort('Fantasy')} >Fantasy</button>
      <button onClick={()=>handleSort('Action')}>Action</button>
      <button onClick={()=>handleSort('Drama')}>Drama</button>
    </div>
   </div>
  );
}}

export default Filter;
