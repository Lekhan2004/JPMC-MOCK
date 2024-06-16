import React from 'react';
// import { Link } from 'react-router-dom';
import './Layout.css'
function Footer() {
  return (
    <footer className="footermain">
      <div className="container">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a href="/get-involved">Get Involved</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Water Streamline NGO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
