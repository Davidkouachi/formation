import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../composants/Header';
import Footer from '../composants/Footer';

export default function Details() {
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
                    <div class="col-lg-12 col-md-12 col-sm-12 content-side">
                        <div class="blog-details-content">
                            <div class="news-block-one">
                                <div class="inner-box">
                                    <figure class="image-box">
                                        <img src="assets/images/news/news-11.jpg" alt="" />
                                    </figure>
                                    <div class="lower-content">
                                        <figure class="admin-thumb"><img src="assets/images/news/admin-1.png" alt="" /></figure>
                                        <span class="category">Informatique</span>
                                        <h2>Apprendre react js</h2>
                                        <span class="post-info">
                                            Date :<a href="blog-details.html"> 10-08-2023</a> - 09h00 ,
                                            Lieu :<a href="blog-details.html"> Plateau - pigier</a> ,
                                            Durée :<a href="blog-details.html"> 3 heure(s)</a>
                                        </span>

                                        <div class="text">
                                            <p>Lorem ipsum dolor sit amet consectur adipisicing sed eiusmod tempor incididunt labore dolore magna aliqua enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
                                            Lorem ipsum dolor sit amet consectur adipisicing sed eiusmod tempor incididunt labore dolore magna aliqua enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                        <div class="two-column">
                                            <div class="row clearfix">
                                                <div class="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div class="text-content">
                                                        <h3>SOMMAIRE :</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <ul class="list-item clearfix">
                                                            <li>Le corps de react js.</li>
                                                            <li>L'instalation de react js.</li>
                                                            <li>Créer sa premiére application react js</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div class="text-content">
                                                        <h3>PRÉ-REQUIS :</h3>
                                                        <ul class="list-item clearfix">
                                                            <li>Un ordinateur portable.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="post-share-option clearfix">
                                            <div class="text pull-left">
                                                <h3>Partager :</h3>
                                            </div>
                                            <ul class="social-links pull-right clearfix">
                                                <li><a href="blog-details.html"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="blog-details.html"><i class="fab fa-google-plus-g"></i></a></li>
                                                <li><a href="blog-details.html"><i class="fab fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
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
