// src/pages/PopularItemsPage.js
import React from "react";
import { useCart } from "../cartcontext/cartcontext"; 
import "../home/home.css";

const Menusection = () => {
  const { addToCart } = useCart(); 

  // Items data
  const biryani = {
    id: "biryani1",
    name: "Lazeez Bhuna Murgh Biryani",
    image: "/images/biryani1.webp",
    price: 399,
  };

  const pizza = {
    id: "pizza1",
    name: "Dragonfire Margherita Pizza",
    image: "/images/pizza1.webp",
    price: 199,
  };

  const lunch = {
    id: "lunch1",
    name: "Dal Makhani Lunchbox",
    image: "/images/lunch1.webp",
    price: 195,
  };

  const rice = {
    id: "rice1",
    name: "Chicken Lababdar Rice Bowl",
    image: "/images/rice1.avif",
    price: 259,
  };

  const curd = {
    id: "curd1",
    name: "Shabhudana Curd Meal",
    image: "/images/curd1.avif",
    price: 259,
  };


  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} has been added to your cart!`); 
  };

  return (
    <div className="home-container">

    <section className="promotions-section">
      <h2>Seasonal Specials</h2>
       <div className="promotion-cards">
        <div className="promotion-card">
         <img src="/images/pizza.jpg" alt="Special 1" />
         <h3>Buy 1 Get 1 Free</h3>
         <p>Enjoy cheesy pizza with our exclusive offer this season.</p>
        </div>
         <div className="promotion-card">
          <img src="/images/burger.jpg" alt="Special 2" />
          <h3>Flat 20% Off</h3>
          <p>Healthy and delicious Burgers now at a discounted price!</p>
         </div>
         <div className="promotion-card">
          <img src="/images/dessert.jpg" alt="Special 3" />
          <h3>Free Dessert</h3>
          <p>Order above ₹299 and get a free dessert of your choice.</p>
       </div>
  </div>
  <div className="button-container">
    <a href="/components/Menu/menu.js">
      <button className="view-menu-button">View Menu</button>
    </a>
  </div>
</section>

      {/* Popular Menu Section */}
      <section className="popular-items-section">
        <h2>Popular Menu Items</h2>
        <div className="popular-cards">
         
          <div className="popular-card">
            <img src={biryani.image} alt="Biryani" />
            <h3>{biryani.name}</h3>
            <p>₹{biryani.price}</p>
            <button onClick={() => handleAddToCart(biryani)}>Add to Cart</button>
          </div>

     
          <div className="popular-card">
            <img src={pizza.image} alt="Pizza" />
            <h3>{pizza.name}</h3>
            <p>₹{pizza.price}</p>
            <button onClick={() => handleAddToCart(pizza)}>Add to Cart</button>
          </div>

          {/* Lunchbox */}
          <div className="popular-card">
            <img src={lunch.image} alt="Lunchbox" />
            <h3>{lunch.name}</h3>
            <p>₹{lunch.price}</p>
            <button onClick={() => handleAddToCart(lunch)}>Add to Cart</button>
          </div>

          {/* Curd Meal */}
          <div className="popular-card">
            <img src={curd.image} alt="Curd Meal" />
            <h3>{curd.name}</h3>
            <p>₹{curd.price}</p>
            <button onClick={() => handleAddToCart(curd)}>Add to Cart</button>
          </div>

          {/* Rice Bowl */}
          <div className="popular-card">
            <img src={rice.image} alt="Rice Bowl" />
            <h3>{rice.name}</h3>
            <p>₹{rice.price}</p>
            <button onClick={() => handleAddToCart(rice)}>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menusection;
