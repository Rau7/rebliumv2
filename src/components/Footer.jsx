import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
  FaDiscord,
} from "react-icons/fa";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer container-lg">
      <div className="row justify-content-center">
        <div className="col-md-2 col-sm-4 col-6">
          <div className="footer-heading">Products</div>
          <div className="footer-list">
            <ul>
              <li className="flist-item">
                <Link className="footer-link" to="/omniface">
                  Omniface
                </Link>
              </li>
              <li className="flist-item">
                <Link className="footer-link" to="/spawn">
                  Spawn SDK
                </Link>
              </li>
              <li className="flist-item">
                <Link className="footer-link" to="/styletto">
                  Styletto
                </Link>
              </li>
              <li className="flist-item">
                <Link className="footer-link" to="/avatar_system">
                  Avatar System
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6">
          <div className="footer-heading">Company</div>
          <div className="footer-list">
            <ul>
              <li className="flist-item">
                <Link className="footer-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="flist-item">
                <Link className="footer-link" to="/about_us">
                  About
                </Link>
              </li>
              <li className="flist-item">
                <a className="footer-link" href="#">
                  Jobs
                </a>
              </li>
              <li className="flist-item">
                <a className="footer-link" href="#">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6 learning">
          <div className="footer-heading">Learning</div>
          <div className="footer-list">
            <ul>
              <li className="flist-item">
                <Link className="footer-link" to="/tutorials">
                  Tutorials
                </Link>
              </li>
              <li className="flist-item">
                <a className="footer-link" href="#">
                  Get Help
                </a>
              </li>
              <li className="flist-item">
                <a className="footer-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6 community">
          <div className="footer-heading">Community</div>
          <div className="footer-list">
            <ul>
              <li className="flist-item">
                <a className="footer-link" href="#">
                  Avatar Contest
                </a>
              </li>
              <li className="flist-item">
                <a className="footer-link" href="#">
                  Discord
                </a>
              </li>
              <li className="flist-item">
                <a className="footer-link" href="#">
                  Forum
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 col-6 connect">
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
            <button type="button" className="btn btn-primary sbscrb-btn">
              Subscribe
            </button>
          </div>
          <div className="icons-area">
            <div className="row">
              <div className="col-2">
                <a href="#" className="social-link fb-icon">
                  <FaFacebook className="social-icons" />
                </a>
              </div>
              <div className="col-2">
                <a href="#" className="social-link twitter-icon">
                  <FaTwitter className="social-icons" />
                </a>
              </div>
              <div className="col-2">
                <a href="#" className="social-link ln-icon">
                  <FaLinkedin className="social-icons" />
                </a>
              </div>
              <div className="col-2">
                <a href="#" className="social-link yt-icon">
                  <FaYoutube className="social-icons" />
                </a>
              </div>
              <div className="col-2">
                <a href="#" className="social-link ig-icon">
                  <FaInstagramSquare className="social-icons" />
                </a>
              </div>
              <div className="col-2">
                <a href="#" className="social-link dc-icon">
                  <FaDiscord className="social-icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
