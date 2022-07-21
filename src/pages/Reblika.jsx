import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/general.css";
import "../styles/reblika.css";
import rebmain from "../images/rebmain.png";
import reb1 from "../images/reb1.png";
import reb2 from "../images/reb2.png";
import reb3 from "../images/reb3.png";
import adidasreb from "../images/adidasreb.png";
import rax from "../images/rax.png";
import crucible from "../images/crucible.png";
import youropen from "../images/youropen.png";
import ozonemetaverse from "../images/ozonemetaverse.png";
import madworld from "../images/madworld.png";
import redpill from "../images/redpill.png";

function Reblika() {
  return (
    <div>
      <Navbar />
      <section className="reb-landing">
        <img className="reb-main" src={rebmain} alt="Reblika Landing" />
        <div className="reb-wrt">
          <p className="reb-head1">We Create Avatars</p>
          <p className="reb-head2 text-center">
            So you can populate your metaverse
          </p>
          <p className="reb-head3 text-center">Avatar Pricing (WIP)</p>
        </div>
      </section>
      <section className="pricing-section card-cont container d-flex justify-content-center">
        <div className="row text-center d-flex justify-content-around">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card">
              <img className="card-img" src={reb1} alt="Free" />
              <h2 className="card-header text-center">Free</h2>
              <p className="card-writing">High quality avatars for everyone</p>
              <div className="free-div-one"></div>
              <p className="price">Free</p>
              <p className="price-detail">Free for everyone</p>
              <div className="free-div-two"></div>
              <div className="button-area d-flex justify-content-center">
                <a href="#" className="load-more">
                  Try Now
                </a>
              </div>
              <div className="specialities">
                <div className="special-item">
                  <h3 className="special-head">Avatar Creation</h3>
                  <p className="special-wrt">
                    User create their own avatar using our avatar system
                  </p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Identity</h3>
                  <p className="special-wrt">Own your Digital Identity</p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Sharing</h3>
                  <p className="special-wrt">
                    Sharing video/stills on Tiktok/Instagram
                  </p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Skins Marketplace</h3>
                  <p className="special-wrt">Buy NFT wearables</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card">
              <img className="card-img" src={reb2} alt="Premium" />
              <h2 className="card-header text-center">Premium</h2>
              <p className="card-writing">
                High quality avatars for NFT enthusiast
              </p>
              <div className="pre-div-one"></div>
              <p className="price">$50</p>
              <p className="price-detail">Billed Monthly or $500 Anually</p>
              <div className="button-area d-flex justify-content-center">
                <a href="#" className="load-more">
                  Buy Now
                </a>
              </div>
              <div className="button-area d-flex justify-content-center">
                <a href="#" className="load-more">
                  Try Now
                </a>
              </div>
              <div className="specialities">
                <div className="special-item">
                  <h3 className="special-head">Avatar Creation</h3>
                  <p className="special-wrt">Our Team at Reblika</p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Identity</h3>
                  <p className="special-wrt">
                    Own your Digital Identity
                    <span className="special-hid"> on the Blockchain</span>
                  </p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Sharing</h3>
                  <p className="special-wrt">
                    Sharing video/stills on Tiktok/Instagram
                  </p>
                  <p className="special-hid">Share Interactive Link</p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Skins Marketplace</h3>
                  <p className="special-wrt">Buy NFT wearables</p>
                  <p className="special-hid">Customizable Labels</p>
                  <p>Custom Tattoo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card">
              <img className="card-img" src={reb1} alt="Business Class" />
              <h2 className="card-header card-buss">Business Class</h2>
              <p className="card-writing">
                High quality avatars for Vtubers & Content creator
              </p>
              <div className="pro-div-one"></div>
              <p className="price">$350</p>
              <p className="price-detail">Billed Monthly or $3500 Anually</p>
              <div className="button-area d-flex justify-content-center">
                <a href="#" className="load-more">
                  Buy Now
                </a>
              </div>
              <div className="button-area d-flex justify-content-center">
                <a href="#" className="load-more">
                  Try Now
                </a>
              </div>
              <div className="specialities">
                <div className="special-item">
                  <h3 className="special-head">Avatar Creation</h3>
                  <p className="special-wrt">3D Scan</p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Identity</h3>
                  <p className="special-wrt">
                    Own your Digital Identity on the Blockchain
                  </p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Sharing</h3>
                  <p className="special-wrt">
                    Sharing video/stills on Tiktok/Instagram
                  </p>
                  <p>Share Interactive Link</p>
                  <p className="special-hid">Video Conference Avatars</p>
                </div>
                <div className="special-item">
                  <h3 className="special-head">Skins Marketplace</h3>
                  <p className="special-wrt">Buy NFT wearables</p>
                  <p className="special-hid">Sell your NFT wearables</p>
                  <p>Customizable Labels</p>
                  <p>Custom Tattoo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="meta-sec container">
        <h1 className="pricing-main-header text-center d-flex justify-content-center">
          METAVERSE PARTNERS
        </h1>
        <div className="partners">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-6">
              <img className="part-img" src={redpill} alt="Redpill" />
            </div>
            <div className="col-md-4 col-sm-6 col-6">
              <img className="part-img" src={madworld} alt="Madworld" />
            </div>
            <div className="col-md-4 col-sm-6 col-6">
              <img
                className="part-img"
                src={ozonemetaverse}
                alt="Ozone Metaverse"
              />
            </div>
            <div className="col-md-4 col-sm-6 col-6">
              <img className="part-img" src={adidasreb} alt="Adidas" />
            </div>
            <div className="col-md-4 col-sm-6 col-6">
              <img
                className="part-img"
                src={youropen}
                alt="Your Open Metaverse"
              />
            </div>
            <div className="col-md-4 col-sm-6 col-6">
              <img className="part-img" src={crucible} alt="Crucible" />
            </div>
          </div>
          <div className="single-part">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 col-sm-6 col-6">
                <img className="part-img" src={rax} alt="Rax" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Reblika;
