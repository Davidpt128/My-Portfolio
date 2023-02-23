import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

export default function FooterHome(props) {
  return (
    <footer className="footer">
      <div className="footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">Dat Pham</h1>
          <span className="footer__subtitle">Web developer</span>
        </div>
        <ul className="footer__links">
          <li>
            <a href="#qualification" className="footer__link">Qualification</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.facebook.com/" target="_blank" className="footer__social">
            <FaFacebookF/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="footer__social">
            <FaInstagram/>
          </a>
          <a href="https://twitter.com/" target="_blank" className="footer__social">
            <FaTwitter/>
          </a>
        </div>
      </div>
      <p className="footer__copy">&#169; Dat Pham. All right reserved</p>
      </div>
    </footer>
  )
}
