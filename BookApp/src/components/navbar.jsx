// src/Navbar.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <>
      {/* ✅ Navbar starts here */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Brand / Logo */}
          <a className="navbar-brand fw-bold" href="#">
            🍴 Tasty Bites
          </a>

          {/* Mobile toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            aria-controls="mynavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links + Search form */}
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            {/* Search box */}
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search dishes"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* ✅ Navbar ends here */}
    </>
  );
}

export default Navbar;