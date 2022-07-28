import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-2" href="#">
            favshop
          </a>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="btn-container">
              <a href="" className="btn btn-outline-dark mx-1 ">
                <i className="fa fa-sign-in"></i> Login
              </a>
              <a href="" className="btn btn-outline-dark mx-1 ">
                <i className="fa fa-user-plus"></i> Register
              </a>
              <a href="" className="btn btn-outline-dark mx-1 ">
                <i className="fa fa-shopping-cart"></i> Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
