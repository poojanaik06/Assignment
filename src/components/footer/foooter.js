import React from 'react';
import '../footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-links">
        <ul>
          <li><a href="/"><b>Home</b></a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><b>Instagram</b></a></li>
        </ul>
        <ul>
          <li><a href="https://maps.app.goo.gl/qvxrtZz9JrKHBypeA" target="_blank" rel="noopener noreferrer"><b>Location</b></a></li>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><b>Facebook</b></a></li>
          
        </ul>        
      </div>
      <div className="copyright">
        <b>&copy; Swift Serve, 2023-24</b>
      </div>
    </footer>
  );
};

export default Footer;