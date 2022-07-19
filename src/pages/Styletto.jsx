import React from "react";
import "../styles/general.css";
import "../styles/styletto.css";
import Navbar from "../components/Navbar";
import styletto_main from "../images/stylettolanding.png";
import styletto1 from "../images/styletto1.png";
import styletto2 from "../images/styletto2.png";
import styletto3 from "../images/styletto3.png";
import Footer from "../components/Footer";

function Styletto() {
  return (
    <>
      <Navbar />
      <section className="styletto-landing">
        <img
          className="styletto-main"
          src={styletto_main}
          alt="Styletto Landing Characters"
        />
        <div className="styletto-wrt">
          <p>STYLETTO x Iris van Herpen</p>
        </div>
      </section>
      <section className="styletto-landing-conn">
        <p>VIRTUAL FASHION FOR THE METAVERSE</p>
      </section>
      <section className="styletto-info container">
        <div className="single-info">
          <div className="row">
            <div className="col-md-5">
              <img
                className="single-img"
                src={styletto1}
                alt="Styletto Show 1"
              />
            </div>
            <div className="col-md-6 infos">
              <h3 className="info-heading">RUNWAY SHOW MADE EASY</h3>
              <p className="info-wrt">
                Styletto is the simplest way for brands to send your collection
                around the world. No need to send video how about interactive
                showroom. Sharing your fashion idea made easy!
              </p>
              <div className="styletto-links d-flex justify-content-between align-items-center">
                <div className="steam-link">
                  <a href="#" className="s-hr btn">
                    Request a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-info">
          <div className="row">
            <div className="col-md-5">
              <img
                className="single-img"
                src={styletto2}
                alt="Styletto Show 2"
              />
            </div>
            <div className="col-md-6 infos">
              <h3 className="info-heading">VIRTUAL BRAND AMBASSADOR</h3>
              <p className="info-wrt">
                Omniface is brought to you from the team behind Reblika. Create
                incredible avatars that YOU control with your camera! Become a
                cute fluffy panda, a fierce dinosaur, or anything you can
                imagine. Omniface has a large library of avatars, so you can
                choose just the right look for your pictures and videos.
              </p>
              <div className="styletto-links d-flex justify-content-between align-items-center">
                <div className="steam-link">
                  <a href="#" className="s-hr btn">
                    Try it our now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-info">
          <div className="row">
            <div className="col-md-5 infos-styletto">
              <div className="stylettocard">
                <h2 className="stylettocard-header">Marketplace</h2>
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
            <div className="col-md-6 styletto-bot-img">
              <img
                className="single-img"
                src={styletto3}
                alt="Styletto Show 3"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Styletto;
