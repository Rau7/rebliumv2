import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/general.css";
import "../styles/blog.css";
import blogmain from "../images/blogmain.png";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import like1 from "../images/like1.png";
import like2 from "../images/like2.png";
import like3 from "../images/like3.png";
import like4 from "../images/like4.png";
import wrt1 from "../images/wrt1.png";
import wrt2 from "../images/wrt2.png";

function Blog() {
  return (
    <>
      <Navbar />
      <section className="blog-landing">
        <img className="blog-main" src={blogmain} alt="Blog Landing" />
      </section>
      <section className="blog-wrt">
        <p>Blog</p>
      </section>
      <section className="blog-area container">
        <div className="category-btns d-flex justify-content-center">
          <button type="btn" className="btn load-more">
            Character Art
          </button>
          <button type="btn" className="btn load-more">
            New
          </button>
          <button type="btn" className="btn load-more">
            Popular
          </button>
          <button type="btn" className="btn load-more">
            Most Discussed
          </button>
        </div>
        <div className="blog-element">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={blog1} alt="Blog 1" />
            </div>
            <div className="col-md-6 blog-wrt-col">
              <h3 className="info-heading">The Banshee Project</h3>
              <p className="info-wrt">
                The genesis of this project is a fun one. I was practicing some
                sculpting while listening to Heilung, an experimental folk music
                band.
              </p>
              <div className="author-area d-flex align-items-center">
                <img className="author-img" src={wrt1} alt="Robin Isola" />
                <div className="post-info">
                  <p className="author-name">Robin Isola</p>
                  <p className="post-date">Jul 11, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-element">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={blog2} alt="Blog 2" />
            </div>
            <div className="col-md-6 blog-wrt-col">
              <h3 className="info-heading">
                Extremely-Realistic Version of Arcane's Jinx
              </h3>
              <p className="info-wrt">
                Netflix bought fan art of The Queen's Gambit made by Character
                Artist Dan Eder to use in its game. The model is sculpted in
                ZBrush and rendered in Arnold.
              </p>
              <div className="author-area d-flex align-items-center">
                <img className="author-img" src={wrt2} alt="Vera Desa" />
                <div className="post-info">
                  <p className="author-name">Vera Desa</p>
                  <p className="post-date">Jul 11, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-element lasts">
          <div className="row">
            <div className="col-md-5">
              <img className="single-img" src={blog3} alt="Blog 3" />
            </div>
            <div className="col-md-6 blog-wrt-col">
              <h3 className="info-heading">Buzz Lightyear Made in ZBrush</h3>
              <p className="info-wrt">
                3D Character Artist Lukas Lima continues the series of stylized
                character models with one more amazing project. This time, the
                artist has reimagined one of the most recognizable Pixar
                characters
              </p>
              <div className="author-area d-flex align-items-center">
                <img className="author-img" src={wrt1} alt="Kate Becky" />
                <div className="post-info">
                  <p className="author-name">Kate Becky</p>
                  <p className="post-date">Jul 11, 2022</p>
                </div>
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
      <section className="recommend-area container">
        <h4 className="recomm-header">You might also like</h4>
        <div className="reccoms">
          <div className="row">
            <div className="col-md-3 col-3">
              <Link className="blog-detail" to="#">
                <img
                  className="recomm-img"
                  src={like1}
                  alt="Recommendation 1"
                />
              </Link>
            </div>
            <div className="col-md-3 col-3">
              <Link className="blog-detail" to="#">
                <img
                  className="recomm-img"
                  src={like2}
                  alt="Recommendation 2"
                />
              </Link>
            </div>
            <div className="col-md-3 col-3">
              <Link className="blog-detail" to="#">
                <img
                  className="recomm-img"
                  src={like3}
                  alt="Recommendation 3"
                />
              </Link>
            </div>
            <div className="col-md-3 col-3">
              <Link className="blog-detail" to="#">
                <img
                  className="recomm-img"
                  src={like4}
                  alt="Recommendation 4"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
