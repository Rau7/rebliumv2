import React from "react";
import "../styles/general.css";
import "../styles/avatar.css";
import Navbar from "../components/Navbar";
import as1 from "../images/as1.png";
import as2 from "../images/as2.png";
import as3 from "../images/as3.png";
import spawn4 from "../images/spawn4.png";
import spawn5 from "../images/spawn5.png";
import Footer from "../components/Footer";

function AvatarSystem() {
  return (
    <>
      <Navbar />
      <section className="as-landing">
        <div className="as-wrt">
          <p>Avatar System</p>
        </div>
      </section>
      <section className="as-main container">
        <div className="as-element">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={as1} alt="Avatar System 1" />
            </div>
            <div className="col-md-6 as-wrt-col">
              <h3 className="info-heading">Gender and Inclusion</h3>
              <p className="info-wrt">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="as-element-xl">
          <div className="row">
            <div className="col-md-6">
              <h3 className="info-heading">Eyebrows</h3>
              <p className="info-wrt">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="col-md-5 as-wrt-col">
              <img className="single-img" src={as2} alt="Avatar System 2" />
            </div>
          </div>
        </div>
        <div className="as-element-md">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={as2} alt="Avatar System 2" />
            </div>
            <div className="col-md-6 as-wrt-col">
              <h3 className="info-heading">Eyebrows</h3>
              <p className="info-wrt">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="as-element lasts">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={as3} alt="Avatar System 3" />
            </div>
            <div className="col-md-6 as-wrt-col">
              <h3 className="info-heading">Beard</h3>
              <p className="info-wrt">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
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

export default AvatarSystem;
