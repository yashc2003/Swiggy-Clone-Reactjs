import React from 'react';
import { Link } from 'react-router-dom';
import "./../Componant/Navbar.css";

function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src='https://cdn.worldvectorlogo.com/logos/swiggy-logo.svg'/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" role="search">
          <input class="form-control me-2" type="location" placeholder="location" aria-label="location"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-link active" to="#">Home</li>
          <li class="nav-link active" to="/offer">Offers</li>
          <li class="nav-link active" to="#">Help</li>
           <li class="nav-link active" to="/sign">Sign In</li>
          <li class="nav-link active" to="/cart">Cart</li>
        </ul>
        
      </div>
    </div>
  </nav>
  </div>
  );
}

export default Navbar;