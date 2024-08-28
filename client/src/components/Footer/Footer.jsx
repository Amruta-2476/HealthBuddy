import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
                  <Link style={{ textDecoration: 'none' }} to="/">
                  <div className="footer-logo">
                <img src={footer_logo} alt="HealthConnect Logo" />
                      <p>HealthConnect</p>
                      </div>
              </Link>
        <p>blah blah</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/"><BsInstagram /></a>
          <a href="https://www.instagram.com/"><BsFacebook /></a>
        </div>
      </div>
      
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/how-it-works">How to work?</Link></li>
          <li><Link to="/courses">Popular Course</Link></li>
          <li><Link to="/services">Service</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Community</h4>
        <ul>
          <li><Link to="/community/maternity">Maternity</Link></li>
          <li><Link to="/community/senior-citizens">Senior citizens</Link></li>
          <li><Link to="/community/working-professionals">Working professionals</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/help-center">Help Center</Link></li>
          <li><Link to="/privacy-policy">Privacy policy</Link></li>
        </ul>
      </div>

      <div className="footer-section contact-info">
        <h4>Contact Info</h4>
        <p><i className="fas fa-phone"></i> +0913-705-3875</p>
        <p><i className="fas fa-envelope"></i> amrutapawar004@gmail.com</p>
        <p><i className="fas fa-envelope"></i> drishya.tomaar29@gmail.com</p>
        <p>H-304, Laxmi Narayan Residency. Opp. Devdaya Nagar. Thane(W)</p>
      </div>
    </div>
  );
};

export default Footer;
