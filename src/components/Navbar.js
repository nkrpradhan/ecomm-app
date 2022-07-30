import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 shadow-sm">
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-bold fs-2" href="#">
            favshop
          </NavLink>
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
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="products" className="nav-link" href="#">
                  Products
                </NavLink>
              </li>
            </ul>
            <div className="btn-container">
              <a href="" className="btn btn-outline-dark mx-1 ">
                <i className="fa fa-sign-in"></i> Login
              </a>
              <a href="" className="btn btn-outline-dark mx-1 ">
                <i className="fa fa-user-plus"></i> Register
              </a>
              <NavLink to={"../cart"} className="btn btn-outline-dark mx-1 ">
                <i className="fa fa-shopping-cart"></i> Cart
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
