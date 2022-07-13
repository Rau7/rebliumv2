import React from "react";
import "../styles/general.css";
import "../styles/navbar.css";
import "../styles/landing.css";
import "../styles/footer.css";
import logo from "../images/logo_reblium.png";
import logo_avatar from "../images/landingxavatar.png";
import spawn from "../images/spaawn.gif";
import omniface from "../images/omniface.gif";
import styletto from "../images/syyletto.gif";
import landingx from "../images/landing.gif";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
  FaDiscord,
} from "react-icons/fa";

function Home() {
  return (
    <div>
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
      <section className="landing-section">
        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-8 d-flex justify-content-center">
            <div className="landing-content">
              <div className="landing-img-area">
                <img
                  src={landingx}
                  alt="Avatar Creator of Reblium"
                  className="landing-img"
                />
              </div>
              <div className="landing-writing text-center">
                <p>Start creating your own avatar now!</p>
              </div>
              <div className="btn-area text-center">
                <a href="#" className="btn cstm-btn">
                  Read More
                </a>
              </div>
              <div className="more-writing text-center">
                <a href="#" className="watch">
                  Watch on Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="three-images-section">
        <div className="row img-row">
          <Link className="col-md-4 img-col" to="/">
            <img className="divider-image" src={styletto} alt="Styletto" />
            <div className="img-wrt">Styletto</div>
          </Link>
          <Link className="col-md-4 img-col" to="/">
            <img className="divider-image" src={omniface} alt="Omniface" />
            <div className="img-wrt omni">Try Omniface Avatar Now!</div>
          </Link>
          <Link className="col-md-4 img-col" to="/">
            <img className="divider-image" src={spawn} alt="Spawn SDK" />
            <div className="img-wrt">SPAWN SDK</div>
          </Link>
        </div>
      </section>
      <section className="footer container">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <div className="footer-heading">Products</div>
            <div className="footer-list">
              <ul>
                <li className="flist-item">
                  <a href="#">Omniface</a>
                </li>
                <li className="flist-item">
                  <a href="#">SPAWN SDK</a>
                </li>
                <li className="flist-item">
                  <a href="#">Styletto</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-heading">Company</div>
            <div className="footer-list">
              <ul>
                <li className="flist-item">
                  <a href="#">Blog</a>
                </li>
                <li className="flist-item">
                  <a href="#">About</a>
                </li>
                <li className="flist-item">
                  <a href="#">Jobs</a>
                </li>
                <li className="flist-item">
                  <a href="#">Press Kit</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-heading">Learning</div>
            <div className="footer-list">
              <ul>
                <li className="flist-item">
                  <a href="#">Tutorials</a>
                </li>
                <li className="flist-item">
                  <a href="#">Get Help</a>
                </li>
                <li className="flist-item">
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-heading">Community</div>
            <div className="footer-list">
              <ul>
                <li className="flist-item">
                  <a href="#">Avatar Contest</a>
                </li>
                <li className="flist-item">
                  <a href="#">Discord</a>
                </li>
                <li className="flist-item">
                  <a href="#">Forum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-heading">Connect</div>
            <div className="subscribe-area">
              <input
                type="text"
                className="form-control subscribe-input"
                placeholder="Join Our Mailing List"
                aria-describedby="sizing-addon1"
              />
            </div>
            <div className="subscribe-btn-area d-flex justify-content-center">
              <button type="button" class="btn btn-primary sbscrb-btn">
                Subscribe
              </button>
            </div>
            <div className="icons-area">
              <div className="row">
                <div className="col-md-2">
                  <a href="#" className="social-link fb-icon">
                    <FaFacebook className="social-icons" />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#" className="social-link twitter-icon">
                    <FaTwitter className="social-icons" />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#" className="social-link ln-icon">
                    <FaLinkedin className="social-icons" />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#" className="social-link yt-icon">
                    <FaYoutube className="social-icons" />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#" className="social-link ig-icon">
                    <FaInstagramSquare className="social-icons" />
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="#" className="social-link dc-icon">
                    <FaDiscord className="social-icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
