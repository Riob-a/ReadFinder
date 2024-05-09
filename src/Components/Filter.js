import React from 'react';

function Filter() {
  const filters = ["Fantasy", "Fiction", "Action", "Romance", "Thriller",  ];

  return (
    <div className='filter-container'>
        <div className="filter-div">
            <div className='filter-box'>
              {filters.map((filter, index) => (
                    <div className="checkbox-item" key={index}>
                      <input type="checkbox" id={filter} value={filter} />
                      <label htmlFor={filter}>{filter}</label>
                    </div>
                  ))}
            </div>
          <button>Filter</button>
        </div>
    </div>
  );
}

export default Filter;
