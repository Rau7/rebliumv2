import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/general.css";
import "../styles/aboutus.css";
import aboutmain from "../images/aboutmain.png";
import au1 from "../images/au1.png";
import au2 from "../images/au2.png";
import au3 from "../images/au3.png";
import mao from "../images/mao.png";
import migle from "../images/migle.png";
import john from "../images/john.png";
import steve from "../images/steve.png";
import vincent from "../images/vincent.png";
import adv1 from "../images/advisor1.png";
import adv2 from "../images/advisor2.png";
import adv3 from "../images/advisor3.png";
import adv4 from "../images/advisor4.png";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <section className="about-landing">
        <img className="about-main" src={aboutmain} alt="Reblika Landing" />
        <div className="about-wrt">
          <p className="about-head1">We Create Avatars</p>
          <p className="about-head2 text-center">
            So you can populate your metaverse
          </p>
        </div>
      </section>
      <section className="about-main-content container">
        <div className="about-element">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={au1} alt="About Us 1" />
            </div>
            <div className="col-md-6 about-wrt-col">
              <h3 className="info-heading">About Us</h3>
              <p className="info-wrt">
                We make Omniface, Spawn SDK and Styletto — a unique 3D avatar
                creator and two companion applications for 3D avatar creation.
                With these products, our community of users creates amazing
                avatars for videogames, metaverse, conference calls virtual
                runway and more.
              </p>
            </div>
          </div>
        </div>
        <div className="about-element-xl">
          <div className="row">
            <div className="col-md-6">
              <h3 className="info-heading">History</h3>
              <p className="info-wrt">
                Reblium was founded in 2021 by Mao Lin Liao, based on the vision
                of substantially speeding up how creators build digital humans
                and avatars, by giving them access to a vast and ever-expanding
                library of 3D avatars, grooms, wardrobe and easy-to-use tools to
                greatly simplify the creative process.
              </p>
            </div>
            <div className="col-md-5 about-wrt-col">
              <img className="single-img" src={au2} alt="About Us 2" />
            </div>
          </div>
        </div>
        <div className="about-element-md">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={au2} alt="About Us 2" />
            </div>
            <div className="col-md-6 about-wrt-col">
              <h3 className="info-heading">Eyebrows</h3>
              <p className="info-wrt">
                Reblium was founded in 2021 by Mao Lin Liao, based on the vision
                of substantially speeding up how creators build digital humans
                and avatars, by giving them access to a vast and ever-expanding
                library of 3D avatars, grooms, wardrobe and easy-to-use tools to
                greatly simplify the creative process.
              </p>
            </div>
          </div>
        </div>
        <div className="about-element lasts">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={au3} alt="About Us 3" />
            </div>
            <div className="col-md-6 about-wrt-col">
              <h3 className="info-heading">Locations</h3>
              <p className="info-wrt">
                Today we are more than 30 people in 16 different countries ,
                with headquarters in Rotterdam, Amsterdam and Barcelona. Many of
                us have a strong background in the games and VFX industries, and
                are still very active in the community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="team-sec container">
        <div className="row">
          <div className="col-md-4 boss-area">
            <div className="boss-sec">
              <img className="team-img boss-img" src={mao} alt="Mao Lin Liao" />
              <div className="boss-info">
                <p className="boss-name">Mao Lin Liao</p>
                <p className="boss-pos">Founder & CEO</p>
              </div>
              <ul className="boss-list">
                <li className="b-item">
                  20+ years of experience in gaming and movie industry
                </li>
                <li className="b-item">Built a succesful Avatar company</li>
                <li className="b-item">
                  Succesfully raised money from angel investors
                </li>
                <li className="b-item">Won 12 Cannes Golden Lion</li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="all-team">
              <div className="team">
                <h2 className="team-heading">The Team</h2>
                <div className="row team-row">
                  <div className="col-md-3 team-member">
                    <img
                      className="team-img"
                      src={migle}
                      alt="Chief Digital Officer"
                    />
                    <p className="team-name">Migle Rakitaite</p>
                    <p className="team-pos">Chief Digital Officer</p>
                  </div>
                  <div className="col-md-3 team-member">
                    <img className="team-img" src={john} alt="Head of Studio" />
                    <p className="team-name">John Prieto</p>
                    <p className="team-pos">Head of Studio</p>
                  </div>
                  <div className="col-md-3 team-member">
                    <img
                      className="team-img"
                      src={steve}
                      alt="Head of Operation"
                    />
                    <p className="team-name">Steve Hashimawari</p>
                    <p className="team-pos">Head of Operation</p>
                  </div>
                  <div className="col-md-3 team-member">
                    <img
                      className="team-img"
                      src={vincent}
                      alt="Head of Creative Production"
                    />
                    <p className="team-name">Vincent Huizinga</p>
                    <p className="team-pos">Head of Creative Production</p>
                  </div>
                </div>
              </div>
              <div className="advisors">
                <h2 className="team-heading">Advisors</h2>
                <div className="row team-row">
                  <div className="col-md-3 team-member">
                    <img
                      className="team-img"
                      src={adv1}
                      alt="Strategic Advisor"
                    />
                    <p className="team-name">Trang Lê Bozon</p>
                    <p className="team-pos">Strategic Advisor</p>
                    <p className="adv-pos">AIKON IBM Accelarator Mentor</p>
                  </div>
                  <div className="col-md-3 team-member">
                    <img className="team-img" src={adv2} alt="Jasper Bekkers" />
                    <p className="team-name">Jasper Bekkers</p>
                    <p className="team-pos">Founder and CTO at </p>
                    <p className="adv-pos">Traverse Research</p>
                  </div>
                  <div className="col-md-3 team-member">
                    <img className="team-img" src={adv3} alt="Max Louwerse" />
                    <p className="team-name">Max Louwerse</p>
                    <p className="team-pos">Professor of Cognitive</p>
                    <p className="adv-pos">
                      Psychology & Artificial Intelligence
                    </p>
                  </div>
                  <div className="col-md-3 team-member">
                    <img
                      className="team-img"
                      src={adv4}
                      alt="Christoph Richter"
                    />
                    <p className="team-name">Christoph Richter</p>
                    <p className="team-pos">Founder</p>
                    <p className="adv-pos">MC² - Startup Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
