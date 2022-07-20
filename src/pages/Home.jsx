import React from "react";
import "../styles/general.css";
import "../styles/landing.css";
import spawn from "../images/spaawn.gif";
import omniface from "../images/omniface.gif";
import styletto from "../images/syyletto.gif";
import landingx from "../images/landing.gif";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="landing-section">
        <div className="row">
          <div className="col-lg-5"></div>
          <div className="col-lg-6 container d-flex justify-content-center">
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
          <Link className="col-md-4 img-col" to="/styletto">
            <img className="divider-image" src={styletto} alt="Styletto" />
            <div className="img-wrt">Styletto</div>
          </Link>
          <Link className="col-md-4 img-col" to="/omniface">
            <img className="divider-image" src={omniface} alt="Omniface" />
            <div className="img-wrt omni">Try Omniface Avatar Now!</div>
          </Link>
          <Link className="col-md-4 img-col" to="/spawn">
            <img className="divider-image" src={spawn} alt="Spawn SDK" />
            <div className="img-wrt">SPAWN SDK</div>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
