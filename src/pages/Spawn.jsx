import React from "react";
import "../styles/general.css";
import "../styles/spawn.css";
import Navbar from "../components/Navbar";
import spawnmain from "../images/spawnmain.png";
import spawn1 from "../images/spawn1.png";
import spawn2 from "../images/spawn2.png";
import spawn3 from "../images/spawn3.png";
import spawn4 from "../images/spawn4.png";
import spawn5 from "../images/spawn5.png";
import Footer from "../components/Footer";

function Spawn() {
  return (
    <>
      <Navbar />
      <section className="spawn-landing">
        <img
          className="spawn-main"
          src={spawnmain}
          alt="spawn Landing Characters"
        />
        <div className="spawn-wrt">
          <p>SPAWN SDK</p>
        </div>
      </section>
      <section className="spawn-landing-conn">
        <p>AVATARS FOR THE METAVERSE</p>
      </section>
      <section className="spawn-info container">
        <div className="single-info">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={spawn1} alt="Spawn Show 1" />
            </div>
            <div className="col-md-6 infos">
              <h3 className="info-heading">100+ AVATARS</h3>
              <p className="info-wrt">
                spawn is the simplest way for brands to send your collection
                around the world. No need to send video how about interactive
                showroom. Sharing your fashion idea made easy!
              </p>
              <div className="spawn-links d-flex justify-content-between align-items-center">
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
              <img className="single-img" src={spawn2} alt="Spawn Show 2" />
            </div>
            <div className="col-md-6 infos">
              <h3 className="info-heading">POWERED BY UE5</h3>
              <p className="info-wrt">
                Omniface is brought to you from the team behind Reblika. Create
                incredible avatars that YOU control with your camera! Become a
                cute fluffy panda, a fierce dinosaur, or anything you can
                imagine. Omniface has a large library of avatars, so you can
                choose just the right look for your pictures and videos.
              </p>
              <div className="spawn-links d-flex justify-content-between align-items-center">
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
          <h3 className="spawn-heading">Marketplace</h3>
          <div className="row">
            <div className="col-md-6 infos-spawn">
              <div className="spawncard">
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
            <div className="col-md-5 spawn-bot-img">
              <img className="single-img" src={spawn3} alt="Spawn Show 3" />
            </div>
          </div>
        </div>
      </section>
      <section className="for-developers">
        <h1 className="pricing-main-header text-center d-flex justify-content-center">
          FOR METAVERSE DEVELOPERS
        </h1>
        <div className="for-dev-area">
          <div className="row">
            <div className="col-md-6 dev-card">
              <div className="col-md-12 d-flex justify-content-center">
                <img className="dev-img" src={spawn5} alt="For Dev" />
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <div className="dev-info">
                  <h2 className="dev-header text-center">Unity API</h2>
                  <p className="dev-writing">
                    Access our avatars in Unity via API
                  </p>
                  <div className="button-area d-flex justify-content-center">
                    <a href="#" className="load-more">
                      Coming Soon
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 dev-card">
              <div className="col-md-12 d-flex justify-content-center">
                <img className="dev-img" src={spawn4} alt="For Dev" />
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <div className="dev-info">
                  <h2 className="dev-header text-center">Unreal API</h2>
                  <p className="dev-writing">
                    Access our avatars in Unreal Engine via API
                  </p>
                  <div className="button-area d-flex justify-content-center">
                    <a href="#" className="load-more">
                      Coming Soon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Spawn;
