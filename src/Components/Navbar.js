//commit your own branch
//https://project2-db.onrender.com/books
import React from "react";

function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand p-3" href="#"><b>ReadFinder</b></a>
      <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01"> 
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active p-3">
            <a className="nav-link" href="#">Home </a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link" href="#">Add Book</a>
          </li>
          <li className="nav-item p-3">
            <a className="nav-link" href="#">Shelf</a>
          </li>
        </ul>
       
      </div>
    </nav>
);
}
export default Navbar;