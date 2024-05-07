//https://project2-db.onrender.com/books
import React from "react";
import {Link} from "react-router-dom"

function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand p-3" to="/"><b>ReadFinder</b></Link>
      <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01"> 
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active p-3">
            <Link className="nav-link" to="/">Home </Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/form">Add Book</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/MyShelves">Shelf</Link>
          </li>
        </ul>
       
      </div>
    </nav>
);
}
export default Navbar;