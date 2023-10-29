import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
        
          <div className="preloader"></div>

          <header class="main-header style-three">
              <div class="header-lower">
                  <div class="auto-container">
                      <div class="outer-box">
                          <div class="logo-box">
                              <figure class="logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="" /></a></figure>
                          </div>
                          <div class="menu-area">
                              <div class="mobile-nav-toggler">
                                  <i class="icon-bar"></i>
                                  <i class="icon-bar"></i>
                                  <i class="icon-bar"></i>
                              </div>
                              <nav class="main-menu navbar-expand-md navbar-light">
                                  <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                      <ul class="navigation clearfix">
                                          <li class=" "><Link to="/">Accueil</Link></li> 
                                          <li class="dropdown"><a>Formations</a>
                                              <ul>
                                                  <li><Link to="/dispo">Disponibles</Link></li>
                                                  <li><Link to="/term">Terminées</Link></li>
                                              </ul>
                                          </li> 
                                      </ul>
                                  </div>
                              </nav>
                          </div>
                          <div class="btn-box">
                              <Link to="/login" class="theme-btn-one">
                                <i class="fa fa-user"></i>Compte
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="sticky-header">
                  <div class="auto-container">
                      <div class="outer-box">
                          <div class="logo-box">
                              <figure class="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" /></a></figure>
                          </div>
                          <div class="menu-area">
                              <nav class="main-menu clearfix">
                                  <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                      <ul class="navigation clearfix">
                                          <li class=" "><Link to="/">Accueil</Link></li> 
                                          <li class="dropdown"><a>Formations</a>
                                              <ul>
                                                  <li><Link to="/dispo">Disponibles</Link></li>
                                                  <li><Link to="/term">Terminées</Link></li>
                                              </ul>
                                          </li> 
                                      </ul>
                                  </div>
                              </nav>
                          </div>
                          <div class="btn-box">
                              <Link to="/login" class="theme-btn-one">
                                <i class="fa fa-user"></i>Compte
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </header>

    </>
  );
}
