import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../composants/Header';
import Footer from '../composants/Footer';

export default function Dispo() {
  return (
    <>
          
        <section className="page-title style-two" style={{ backgroundImage:'url(assets/images/banner/banner-1.jpg)'}}>
                <div class="auto-container">
                  <div class="content-box centred mr-0">
                      <div class="title">
                          <h1>Formations disponibles.</h1>
                      </div>
                  </div>
              </div>
          </section>

          <section class="sidebar-page-container">
              <div class="auto-container">
                  <div class="row clearfix">
                      <div class="col-lg-12 col-md-12 col-sm-12 sidebar-side pb-5">
                          <div class="blog-sidebar default-sidebar">
                              <div class="search-widget sidebar-widget">
                                  <div class="widget-title">
                                      <h3>Search</h3>
                                  </div>
                                  <form action="http://azim.commonsupport.com/Clasifico/blog.html" method="post" class="search-form default-form">
                                      <div class="form-group">
                                          <input type="search" name="search-field" placeholder="Search" required="" />
                                          <button type="submit"><i class="fas fa-search"></i></button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-9 col-md-12 col-sm-12 content-side">
                          <div class="blog-grid-content">
                              <div class="row clearfix">
                                  <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                      <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                          <div class="inner-box">
                                              <figure class="image-box">
                                                  <img src="assets/images/news/news-1.jpg" alt="" />
                                                  <a href="blog-details.html"><i class="fas fa-link"></i></a>
                                              </figure>
                                              <div class="lower-content">
                                                  <figure class="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                                  <span class="category">Informarique</span>
                                                  <h3><a href="blog-details.html">Apprendre React js</a></h3>
                                                  <span class="post-info">
                                                      Date :<a href="blog-details.html"> 10-08-2023</a> - 09h00
                                                  </span>
                                                  <span class="post-info">
                                                      Lieu :<a href="blog-details.html"> Plateau - pigier</a>
                                                  </span>
                                                  <span class="post-info">
                                                      Durée :<a href="blog-details.html"> 3 heure(s)</a>
                                                  </span>
                                                  <br />
                                                  <Link to="/details" class="btn btn-primary btn-dim" >
                                                      <span>
                                                        <a>
                                                          Savoir plus 
                                                          <i class="far fa-long-arrow-right" ></i>
                                                        </a>
                                                      </span>
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                      <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                          <div class="inner-box">
                                              <figure class="image-box">
                                                  <img src="assets/images/news/news-1.jpg" alt="" />
                                                  <a href="blog-details.html"><i class="fas fa-link"></i></a>
                                              </figure>
                                              <div class="lower-content">
                                                  <figure class="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                                  <span class="category">Batiment</span>
                                                  <h3><a href="blog-details.html">Apprendre á concevoir des plans de maison</a></h3>
                                                  <span class="post-info">
                                                      Date :<a href="blog-details.html"> 15-08-2023</a> - 10h00
                                                  </span>
                                                  <span class="post-info">
                                                      Lieu :<a href="blog-details.html"> Plateau - Groupe CEFIAT</a>
                                                  </span>
                                                  <span class="post-info">
                                                      Durée :<a href="blog-details.html"> 3 heure(s)</a>
                                                  </span>
                                                  <br />
                                                  <Link to="/details" class="btn btn-primary btn-dim" >
                                                      <span>
                                                        <a>
                                                          Savoir plus 
                                                          <i class="far fa-long-arrow-right" ></i>
                                                        </a>
                                                      </span>
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                      <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                          <div class="inner-box">
                                              <figure class="image-box">
                                                  <img src="assets/images/news/news-1.jpg" alt="" />
                                                  <a href="blog-details.html"><i class="fas fa-link"></i></a>
                                              </figure>
                                              <div class="lower-content">
                                                  <figure class="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                                  <span class="category">Comptablité</span>
                                                  <h3><a href="blog-details.html">Apprendre á faire un audite</a></h3>
                                                  <span class="post-info">
                                                      Date :<a href="blog-details.html"> 20-08-2023</a> - 80h00
                                                  </span>
                                                  <span class="post-info">
                                                      Lieu :<a href="blog-details.html"> Cocody - CEPEDEC</a>
                                                  </span>
                                                  <span class="post-info">
                                                      Durée :<a href="blog-details.html"> 3 heure(s)</a>
                                                  </span>
                                                  <br />
                                                  <Link to="/details" class="btn btn-primary btn-dim" >
                                                      <span>
                                                        <a>
                                                          Savoir plus 
                                                          <i class="far fa-long-arrow-right" ></i>
                                                        </a>
                                                      </span>
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                      <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                          <div class="inner-box">
                                              <figure class="image-box">
                                                  <img src="assets/images/news/news-1.jpg" alt="" />
                                                  <a href="blog-details.html"><i class="fas fa-link"></i></a>
                                              </figure>
                                              <div class="lower-content">
                                                  <figure class="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                                  <span class="category">Informarique</span>
                                                  <h3><a href="blog-details.html">Apprendre React js</a></h3>
                                                  <span class="post-info">
                                                      Date :<a href="blog-details.html"> 10-08-2023</a> - 09h00
                                                  </span>
                                                  <span class="post-info">
                                                      Lieu :<a href="blog-details.html"> Plateau - pigier</a>
                                                  </span>
                                                  <span class="post-info">
                                                      Durée :<a href="blog-details.html"> 3 heure(s)</a>
                                                  </span>
                                                  <br />
                                                  <Link to="/details" class="btn btn-primary btn-dim" >
                                                      <span>
                                                        <a>
                                                          Savoir plus 
                                                          <i class="far fa-long-arrow-right" ></i>
                                                        </a>
                                                      </span>
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                      <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                          <div class="inner-box">
                                              <figure class="image-box">
                                                  <img src="assets/images/news/news-1.jpg" alt="" />
                                                  <a href="blog-details.html"><i class="fas fa-link"></i></a>
                                              </figure>
                                              <div class="lower-content">
                                                  <figure class="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                                  <span class="category">Batiment</span>
                                                  <h3><a href="blog-details.html">Apprendre á concevoir des plans de maison</a></h3>
                                                  <span class="post-info">
                                                      Date :<a href="blog-details.html"> 15-08-2023</a> - 10h00
                                                  </span>
                                                  <span class="post-info">
                                                      Lieu :<a href="blog-details.html"> Plateau - Groupe CEFIAT</a>
                                                  </span>
                                                  <span class="post-info">
                                                      Durée :<a href="blog-details.html"> 3 heure(s)</a>
                                                  </span>
                                                  <br />
                                                  <Link to="/details" class="btn btn-primary btn-dim" >
                                                      <span>
                                                        <a>
                                                          Savoir plus 
                                                          <i class="far fa-long-arrow-right" ></i>
                                                        </a>
                                                      </span>
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 col-sm-12 news-block">
                                      <div class="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                          <div class="inner-box">
                                              <figure class="image-box">
                                                  <img src="assets/images/news/news-1.jpg" alt="" />
                                                  <a href="blog-details.html"><i class="fas fa-link"></i></a>
                                              </figure>
                                              <div class="lower-content">
                                                  <figure class="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                                  <span class="category">Comptablité</span>
                                                  <h3><a href="blog-details.html">Apprendre á faire un audite</a></h3>
                                                  <span class="post-info">
                                                      Date :<a href="blog-details.html"> 20-08-2023</a> - 80h00
                                                  </span>
                                                  <span class="post-info">
                                                      Lieu :<a href="blog-details.html"> Cocody - CEPEDEC</a>
                                                  </span>
                                                  <span class="post-info">
                                                      Durée :<a href="blog-details.html"> 3 heure(s)</a>
                                                  </span>
                                                  <br />
                                                  <Link to="/details" class="btn btn-primary btn-dim" >
                                                      <span>
                                                        <a>
                                                          Savoir plus 
                                                          <i class="far fa-long-arrow-right" ></i>
                                                        </a>
                                                      </span>
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="pagination-wrapper centred">
                                  <ul class="pagination clearfix">
                                      <li><a href="category-details.html"><i class="far fa-angle-left"></i>Prev</a></li>
                                      <li><a href="category-details.html" class="current">01</a></li>
                                      <li><a href="category-details.html">02</a></li>
                                      <li><a href="category-details.html">03</a></li>
                                      <li><a href="category-details.html">Next<i class="far fa-angle-right"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                          <div class="blog-sidebar default-sidebar">
                              <div class="sidebar-category sidebar-widget">
                                  <div class="widget-title">
                                      <h3>Domaine</h3>
                                  </div>
                                  <div class="widget-content">
                                      <ul class="category-list">
                                          <li><a href="#">All</a></li>
                                          <li class="dropdown">
                                              <a href="#" class="current">Ellectronics</a>
                                              <ul>
                                                  <li><a href="#">Computers</a></li>
                                                  <li><a href="#">Drones</a></li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="sidebar-category sidebar-widget">
                                  <div class="widget-title">
                                      <h3>Niveau</h3>
                                  </div>
                                  <div class="widget-content">
                                      <ul class="category-list">
                                          <li><a href="#">All</a></li>
                                          <li class="dropdown">
                                              <a href="#" class="current">Ellectronics</a>
                                              <ul>
                                                  <li><a href="#">Computers</a></li>
                                                  <li><a href="#">Drones</a></li>
                                              </ul>
                                          </li>
                                      </ul>
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
