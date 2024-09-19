import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => { 
  return (
    <footer className="bg-light text-center py-4">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com" className="mx-2" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="icon" color="#3b5998" />
          </a>
          <a href="https://www.instagram.com" className="mx-2" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="icon" color="#e4405f" />
          </a>
          <a href="https://wa.me/" className="mx-2" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" color="#25d366" />
          </a>
          <a href="https://twitter.com" className="mx-2" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="icon" color="#1da1f2" />
          </a>
          <a href="https://github.com" className="mx-2" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="icon" color="#4078c0" />
          </a>
        </div>
        <p className="mt-3">© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
