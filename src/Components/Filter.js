import React from 'react'

function Filter() {
  const filters = ["Fantasy", "friction", "action", "romance", "thriller"];

  return (
  <div className='filter-container'>
      <div class="div">
          {filters.map((filter) =>(
            <div class="checkbox-item">
              <input type="checkbox" id={filter} value={filter}/>
              <label htmlFor={filter}>{filter}</label>
            </div>
        ))}

        <button>Filter</button>
      </div>
  </div>
  
  )
}

export default Filter