import React from 'react';
import { Link } from 'react-router-dom';
import './../Componant/Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="https://cdn.worldvectorlogo.com/logos/swiggy-logo.svg" alt="Swiggy Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Location"
                aria-label="Location"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/offers">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/help">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/signin ">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/cart">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
