import React from "react";
import logo from "../images/logo_reblium.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-area">
      <nav className="navbar navbar-expand-md navbar-light bg-transparent">
        <div className="container-lg">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo of Reblium" className="navbar-logo" />
          </Link>
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
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/omniface">
                        Omniface
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/spawnsdk">
                        Spawn SDK
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/styletto">
                        Styletto
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Press Kit
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Learning
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton3"
                  >
                    <li>
                      <Link className="dropdown-item" to="/tutorials">
                        Tutorials
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Get Help
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton4"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Community
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton4"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Avatar Contest
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Discord
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Forum
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light">
                  Sign In
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
