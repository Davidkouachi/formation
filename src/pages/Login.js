import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
          
        <section class="page-title style-two" style={{backgroundImage: 'url(assets/images/background/page-title.jpg)'}}>
            <div class="auto-container">
                <div class="content-box centred mr-0">
                    <div class="title">
                        <h1>Connexion</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="login-section bg-color-2">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="inner-box">
                        <form action="" method="post" class="login-form">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required="" />
                            </div>
                            <div class="form-group">
                                <label>Mot de passe</label>
                                <input type="password" name="Mot de passe" required="" />
                            </div>
                            <div class="form-group">
                                <div class="text"><a href="login.html">Mot de passe oublié?</a></div>
                            </div>
                            <div class="form-group message-btn">
                                <button type="submit" class="theme-btn-one">Se connecter</button>
                            </div>
                        </form>
                        <div class="other-content centred">
                            <div class="text"><span>ou</span></div>
                            <ul class="social-links clearfix">
                                <li><a href="login.html"><i class="fab fa-facebook-f"></i>Facebook</a></li>
                                <li><a href="login.html"><i class="fab fa-google-plus-g"></i>Google Plus</a></li>
                            </ul>
                            <div class="othre-text">
                                <p>Vous n'avez pas de compte ? <Link to="/register">S'inscrire</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="main-footer">
            <div class="footer-bottom">
                <div class="auto-container">
                    <div class="footer-inner clearfix">
                        <div class="copyright pull-left"><p><a href="index.html">Clasifico</a> &copy; 2020 All Right Reserved</p></div>
                        <ul class="footer-nav pull-right clearfix">
                            <li><a href="index.html">Terms of Service</a></li>
                            <li><a href="index.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </>
  );
}
