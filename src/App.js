import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/cartcontext/cartcontext";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Pizza from "./components/pizza/pizza1";
import Menu from "./components/Menu/menu.js";
import Pizzamenu from "./components/pizza/pizzamenu.js";
import Biryani from "./components/biryani/biryani.js";
import Wrap from "./components/wraps/wrap.js";
import Burger from "./components/burger/burger.js";
import Rice from "./components/rice/rice.js";
import Dessert from "./components/dessert/dessert.js";
import ContactForm from "./components/contact/contact.js";
import Footer from "./components/footer/foooter.js";
import AboutUs from "./components/about/about.js";
import AuthPage from "./components/signup/signup.js";

function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
      < Route path="/" element={<Home />} /> 
      < Route path="/components/cart/cart.js" element={<Cart />} /> 
      < Route path="/components/pizza/pizza1.js" element={<Pizza />} /> 
      < Route path="/components/Menu/menu.js" element={<Menu />} /> 
      < Route path="/components/pizza/pizzamenu.js" element={<Pizzamenu />} /> 
      < Route path="/components/biryani/biryani.js" element={<Biryani />} /> 
      < Route path="/components/wraps/wrap.js" element={<Wrap />} /> 
      < Route path="/components/burger/burger.js" element={<Burger />} /> 
      < Route path="/components/rice/rice.js" element={<Rice />} /> 
      < Route path="/components/dessert/dessert.js" element={<Dessert />} /> 
      < Route path="/components/contact/contact.js" element={<ContactForm />} /> 
      < Route path="/components/about/about.js" element={<AboutUs />} /> 
      < Route path="/components/signup/signup.js" element={<AuthPage />} /> 

      </Routes>
    <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;