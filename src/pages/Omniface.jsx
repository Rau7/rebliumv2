import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/general.css";
import "../styles/omniface.css";
import omni_main from "../images/omni_main.png";
import omni1 from "../images/omni1.png";
import omni2 from "../images/omni2.png";
import omni3 from "../images/omni3.png";
import { FaWindows, FaApple } from "react-icons/fa";

function Omniface() {
  return (
    <div>
      <Navbar />
      <section className="omniface-landing">
        <img
          className="omni-main"
          src={omni_main}
          alt="Omniface Landing Characters"
        />
        <div className="omni-wrt">
          <p>Omniface</p>
        </div>
      </section>
      <section className="omni-landing-conn">
        <p>Video Conferencing Avatar</p>
      </section>
      <section className="omni-info container">
        <div className="single-info">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={omni1} alt="Omniface Show 1" />
            </div>
            <div className="col-md-6 infos">
              <h3 className="info-heading">Omniface Desktop</h3>
              <p className="info-wrt">
                Livestream, video chat, and record videos as incredible 2D and
                3D avatars! Use one of the over 50 avatars provided or import
                your own 2D, 3D, VRM, or Ready Player Me model. Omniface
                redefines avatar embodiment with enhanced face tracking,
                expressive animation, and improved graphics.
              </p>
              <div className="omni-links d-flex justify-content-between align-items-center">
                <div className="steam-link">
                  <a href="#" className="s-hr btn">
                    Download From Steam
                  </a>
                </div>
                <div className="buttons d-flex align-items-center">
                  <a href="#" className="btn-link win">
                    <FaWindows />
                  </a>
                  <a href="#" className="btn-link ios">
                    <FaApple />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-info">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={omni2} alt="Omniface Show 2" />
            </div>
            <div className="col-md-6 infos">
              <h3 className="info-heading">Omniface iOS</h3>
              <p className="info-wrt">
                Omniface is brought to you from the team behind Reblika. Create
                incredible avatars that YOU control with your camera! Become a
                cute fluffy panda, a fierce dinosaur, or anything you can
                imagine. Omniface has a large library of avatars, so you can
                choose just the right look for your pictures and videos.
              </p>
            </div>
          </div>
        </div>
        <div className="single-info">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={omni3} alt="Omniface Show 3" />
            </div>
            <div className="col-md-6 infos">
              <h3 className="info-heading">3D Morph Filters</h3>
              <p className="info-wrt">
                Omniface is brought to you from the team behind Reblika. Create
                incredible avatars that YOU control with your camera! Become a
                cute fluffy panda, a fierce dinosaur, or anything you can
                imagine. Omniface has a large library of avatars, so you can
                choose just the right look for your pictures and videos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-section card-cont container d-flex justify-content-center">
        <div className="row text-center d-flex justify-content-around">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card">
              <h2 className="card-header text-center">Basic</h2>
              <p className="card-writing">
                Great for people learning to stream
              </p>
              <p className="price">Free</p>
              <div className="button-area d-flex justify-content-center">
                <a href="#" className="load-more">
                  Try Now
                </a>
              </div>
              <div className="specialities">
                <ul className="price-list">
                  <li className="price-item">Stream for 30 min</li>
                  <li className="price-item">
                    Unlimited imports for custom backgrounds, avatars, & props
                  </li>
                  <li className="price-item">
                    iPhone-based tracker - ARKit technology
                  </li>
                  <li className="price-item">
                    Access to ever-expanding set of tracking technologies:
                    audio-based lipsync, hands tracking, full body tracking,
                    etc.
                  </li>
                  <li className="price-item">
                    Access to 80+ free items including avatars, backgrounds,
                    props and emotes
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card">
              <h2 className="card-header text-center">Plus</h2>
              <p className="card-writing">
                Upgrade your streaming game and grow your channel
              </p>
              <p className="price">$19.99</p>
              <p className="price-detail">$2.00/Month</p>
              <div className="button-area d-flex justify-content-center">
                <a href="#" className="load-more">
                  Try Now
                </a>
              </div>
              <div className="specialities">
                <ul className="price-list">
                  <li className="price-item">Everything in basic</li>
                  <li className="price-item">Remove watermark</li>
                  <li className="price-item">3D Moph filters</li>
                  <li className="price-item">Stream at 60 fps</li>
                  <li className="price-item">Export as mp4</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card">
              <h2 className="card-header text-center">Pro</h2>
              <p className="card-writing">Perfect for professional streamers</p>
              <p className="price">$99.99</p>
              <p className="price-detail">$8.00/Month</p>
              <div className="button-area d-flex justify-content-center">
                <a href="#" className="load-more">
                  Try Now
                </a>
              </div>
              <div className="specialities">
                <ul className="price-list">
                  <li className="price-item">Everything in Plus</li>
                  <li className="price-item">
                    Pro-Streamer Commercial Rights for streamers earning $6,000
                    per year (average of $500+ per month)
                  </li>
                  <li className="price-item">Early beta access</li>
                  <li className="price-item">Stream at 60 fps</li>
                  <li className="price-item">
                    We scan and create your original avatar/background/prop to
                    better complement your identity (limited to 2 avatars, 5
                    accessories, 2 backgrounds and 3 emotes).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Omniface;
