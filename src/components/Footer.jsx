import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => { 
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} className="icon" color="#3b5998" /></a>
        <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" color="#e4405f" /></a>
        <a href="https://wa.me/"><FontAwesomeIcon icon={faWhatsapp} className="icon" color="#25d366" /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon" color="#1da1f2" /></a>
        <a href="https://github.com"><FontAwesomeIcon icon={faGithub} className="icon" color="#4078c0" /></a>
      </div>
    </footer>
  );
};

export default Footer;



