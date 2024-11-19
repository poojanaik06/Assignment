import React from "react";
import "../header/header.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="/components/Menu/menu.js">Menu</a></li>
        <li><a href="/components/contact/contact.js">Contact</a></li>
        <li><a href="/components/about/about.js">About Us</a></li>
        <li><a href="/components/signup/signup.js" className="signup-btn">Sign Up</a></li>
        <li><Link to="/components/cart/cart.js" className="cart-btn">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
