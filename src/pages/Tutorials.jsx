import React from "react";
import "../styles/general.css";
import "../styles/tutorials.css";
import Navbar from "../components/Navbar";
import tut1 from "../images/tut1.png";
import tut2 from "../images/tut2.png";
import tut3 from "../images/tut3.png";
import spawn4 from "../images/spawn4.png";
import spawn5 from "../images/spawn5.png";
import Footer from "../components/Footer";
import { FaYoutube } from "react-icons/fa";

function Tutorials() {
  return (
    <>
      <Navbar />
      <section className="tut-landing">
        <div className="tut-wrt">
          <p>Tutorials</p>
        </div>
      </section>
      <section className="tut-main container">
        <div className="tut-element">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={tut1} alt="Tutorial 1" />
            </div>
            <div className="col-md-6 tut-wrt-col">
              <h3 className="info-heading">UI/UX</h3>
              <p className="info-wrt">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="play-area d-flex align-items-center">
                <FaYoutube className="play-icon" />
                <p className="play-wrt">Play Video</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tut-element">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={tut2} alt="Tutorial 2" />
            </div>
            <div className="col-md-6 tut-wrt-col">
              <h3 className="info-heading">Tattoo</h3>
              <p className="info-wrt">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="play-area d-flex align-items-center">
                <FaYoutube className="play-icon" />
                <p className="play-wrt">Play Video</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tut-element lasts">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={tut3} alt="Tutorial 3" />
            </div>
            <div className="col-md-6 tut-wrt-col">
              <h3 className="info-heading">Groom</h3>
              <p className="info-wrt">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="play-area d-flex align-items-center">
                <FaYoutube className="play-icon" />
                <p className="play-wrt">Play Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pagination d-flex justify-content-center">
        <button type="button" className="btn page-num-btn active">
          1
        </button>
        <button type="button" className="btn page-num-btn">
          2
        </button>
        <button type="button" className="btn page-num-btn">
          3
        </button>
        <button type="button" className="btn page-num-btn">
          4
        </button>
        <button type="button" className="btn page-num-btn">
          5
        </button>
        <button type="button" className="btn next-btn">
          Next
        </button>
      </section>
      <section className="for-developers container">
        <h1 className="pricing-main-header text-center d-flex justify-content-center">
          FOR METAVERSE DEVELOPERS
        </h1>
        <div className="for-dev-area">
          <div className="row">
            <div className="col-md-6 dev-card">
              <div className="col-md-12 d-flex justify-content-center">
                <img className="dev-img" src={spawn4} alt="For Dev" />
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
                <img className="dev-img" src={spawn5} alt="For Dev" />
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

export default Tutorials;
