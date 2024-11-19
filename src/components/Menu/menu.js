import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../Menu/menu.css";
import pizzaImage from '../Menu/Pizza.avif'; 
import biryaniImage from '../Menu/biryani.avif'; 
import wrapImage from '../Menu/wrap.jpg'; 
import burgerImage from "../Menu/burger.webp";
import bowlImage from "../Menu/bowl.jpg";
import dessertImage from "../Menu/dessert.avif";

const Menu = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle navigation on button click
  const handleNavigate = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div className="menu">
      <h1>Our Cuisines </h1>
      <div className="menu-grid">
        <div className="menu-card">
        <img src={pizzaImage} alt="Pizza"  />
          <div className="card-info">
            <h3>Pizzas</h3>
            <p>Indulge in the perfect balance of crispy crust, gooey cheese, and savory toppings.</p>
            <button onClick={() => handleNavigate("/components/pizza/pizzamenu.js")}>View Menu</button>
          </div>
        </div>

        <div className="menu-card">
          <img src={biryaniImage} alt="Biryani" />
          <div className="card-info">
            <h3>Biryani</h3>
            <p>Handcrafted, Royal Biryanis</p>
            <button onClick={() => handleNavigate("/components/biryani/biryani.js")}>View Menu</button>
          </div>
        </div>

        <div className="menu-card">
          <img src={wrapImage} alt="wraps" />
          <div className="card-info">
            <h3>Wraps And Rolls</h3>
            <p>Indulgent wraps loaded with high protein fillings</p>
            <button onClick={() => handleNavigate("/components/wraps/wrap.js")}>View Menu</button>
          </div>
        </div>

        <div className="menu-card">
          <img src={burgerImage}alt="burger" />
          <div className="card-info">
            <h3>Burgers</h3>
            <p>Stacked & packed for heavy duty</p>
            <button onClick={() => handleNavigate("/components/burger/burger.js")}>View Menu</button>
          </div>
        </div>

        <div className="menu-card">
          <img src={bowlImage} alt="rice bowl" />
          <div className="card-info">
            <h3>Rice Bowl</h3>
            <p>Delicious Bowl Meals - Hygienic & Safe</p>
            <button onClick={() => handleNavigate("/components/rice/rice.js")}>View Menu</button>
          </div>
        </div>

        <div className="menu-card">
          <img src={dessertImage}alt="dessert" />
          <div className="card-info">
            <h3>Desserts</h3>
            <p>Ice Cream, Dessert</p>
            <button onClick={() => handleNavigate("/components/dessert/dessert.js")}>View Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
