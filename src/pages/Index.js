import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../composants/Header';
import Footer from '../composants/Footer';

export default function Index() {
  return (
    <>
          
          <section className="page-title style-two" style={{ backgroundImage:'url(assets/images/banner/banner-1.jpg)'}}>
                <div class="auto-container">
                  <div class="content-box centred mr-0">
                      <div class="title">
                          <h1>Apprenez en ligne avec nos Formations constitués des meilleures ressources.</h1>
                      </div>
                  </div>
              </div>
          </section>

          <section className="news-section sec-pad">
              <div className="auto-container">
                  <div className="sec-title centred">
                      <h2 className="text-success" >Quelques Formations disponibles</h2>
                  </div>
                  <div className="row ">
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="assets/images/news/news-1.jpg" alt="" />
                                      <a href="blog-details.html"><i className="fas fa-link"></i></a>
                                  </figure>
                                  <div className="lower-content">
                                      <figure className="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                      <span className="category">Informarique</span>
                                      <h3><a href="blog-details.html">Apprendre React js</a></h3>
                                      <span className="post-info">Date :<a href="blog-details.html"> 10-08-2023</a> - 09h00</span>
                                      <span className="post-info">Lieu :<a href="blog-details.html"> Plateau - pigier</a></span>
                                      <br />
                                      <Link to="/details" className="btn btn-primary btn-dim" >
                                          <span>Savoir plus <i className="far fa-long-arrow-right" ></i></span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="assets/images/news/news-1.jpg" alt="" />
                                      <a href="blog-details.html"><i className="fas fa-link"></i></a>
                                  </figure>
                                  <div className="lower-content">
                                      <figure className="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                      <span className="category">Batiment</span>
                                      <h3><a href="blog-details.html">Apprendre á concevoir des plans de maison</a></h3>
                                      <span className="post-info">Date :<a href="blog-details.html"> 15-08-2023</a> - 10h00</span>
                                      <span className="post-info">Lieu :<a href="blog-details.html"> Plateau - Groupe CEFIAT</a></span>
                                      <br />
                                      <Link to="/details" className="btn btn-primary btn-dim" >
                                          <span>Savoir plus <i className="far fa-long-arrow-right" ></i></span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                          <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="assets/images/news/news-1.jpg" alt="" />
                                      <a href="blog-details.html"><i className="fas fa-link"></i></a>
                                  </figure>
                                  <div className="lower-content">
                                      <figure className="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                      <span className="category">Comptablité</span>
                                      <h3><a href="blog-details.html">Apprendre á faire un audite</a></h3>
                                      <span className="post-info">Date :<a href="blog-details.html"> 20-08-2023</a> - 08h00</span>
                                      <span className="post-info">Lieu :<a href="blog-details.html"> Cocody - CEPEDEC</a></span>
                                      <br />
                                      <Link to="/details" className="btn btn-primary btn-dim" >
                                          <span>Savoir plus <i className="far fa-long-arrow-right" ></i></span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="download-section">
              <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-8.png)'}}></div>
              <div className="auto-container">
                  <div className="row align-items-center clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <div className="image-box">
                              <figure className="image image-1"><img src="assets/images/resource/laptop-1.png" alt="" /></figure>
                              <figure className="image image-2 rotate-me"><img src="assets/images/resource/ball-1.png" alt="" /></figure>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                          <div className="content_block_1">
                              <div className="content-box">
                                  <span className="upper-text">Download</span>
                                  <h2>Download Our Android and IOS App for Experience</h2>
                                  <div className="download-btn">
                                      <a href="index.html" className="app-store">
                                          <i className="icon-23"></i>
                                          <span>Download on</span>
                                          <h4>App Store</h4>
                                      </a>
                                      <a href="index.html" className="play-store">
                                          <i className="icon-24"></i>
                                          <span>Get It On</span>
                                          <h4>Google Play</h4>
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
