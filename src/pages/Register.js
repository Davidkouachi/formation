import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
          
        <section class="page-title style-two" style={{backgroundImage: 'url(assets/images/background/page-title.jpg)'}}>
            <div class="auto-container">
                <div class="content-box centred mr-0">
                    <div class="title">
                        <h1>Inscription</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="login-section signup-section bg-color-2">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="inner-box">
                        <div class="other-content centred">
                            <ul class="social-links clearfix">
                                <li><a href="login.html"><i class="fab fa-facebook-f"></i>Facebook</a></li>
                                <li><a href="login.html"><i class="fab fa-google-plus-g"></i>Google Plus</a></li>
                            </ul>
                            <div class="text"><span>ou</span></div>
                        </div>
                        <form action="http://azim.commonsupport.com/Clasifico/signup.html" method="post" class="signup-form">
                            <div class="form-group">
                                <label>Nom et prenom</label>
                                <input type="text" name="name" required="" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required="" />
                            </div>
                            <div class="form-group">
                                <label>Mot de passe</label>
                                <input type="password" name="password" required="" />
                            </div>
                            <div class="form-group">
                                <label>Confirmer le mot de passe</label>
                                <input type="password" name="cpassword" required="" />
                            </div>
                            <div class="form-group message-btn">
                                <button type="submit" class="theme-btn-one">S'inscrire</button>
                            </div>
                        </form>
                        <div class="othre-text centred">
                            <p>Vous avez déjà un compte? <Link to="/login">Se conneter</Link></p>
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
