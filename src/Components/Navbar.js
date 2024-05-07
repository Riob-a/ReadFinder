//commit your own branch
//https://project2-db.onrender.com/books
import React from "react";

function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand mr-10" href="#">Hidden brand</a>
      <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01"> 
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
       
      </div>
    </nav>
);
}
export default Navbar;