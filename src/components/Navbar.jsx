import React from "react";
import logo from "../images/logo_reblium.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="nav-area">
      <nav className="navbar navbar-expand-md navbar-light bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="landingv2.html">
            <img src={logo} alt="Logo of Reblium" className="navbar-logo" />
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
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Learning
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="btn cstm-btn">
                  Subscribe
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
