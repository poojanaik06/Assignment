import React, { useState } from "react";
import { useCart } from "../cartcontext/cartcontext"; 
import "../pizza/pizzamenu.css";

const Wrap = () => {

  const products = [
    {
      name: "Veg FalafelWrap",
      description: "Get wrapped in this Mediterranean surprise! We roll up crispy falafel, made from the finest chickpeas, fresh lebneh sauce, with classic mayo and crunchy onions in a lachcha paratha!",
      price: 99,
      originalPrice: 169,
      rating: 4.3,
      image: "/images/wrap2.avif",
      category: "Veg",
    },
    {
      name: "Chicken Bhuna Wrap",
      description: "Old is gold! Turning the clock back with this delish wrap made with roasted and flavourful chicken pieces, slow-cooked in spicy bhuna masala with onion and wrapped in a soft, warm roti.",
      price: 139,
      originalPrice: 198,
      rating: 4.3,
      image: "/images/wrap3.avif",
      category: "Non-Veg",
    },
    {
        name: "Zingy Chilly Cheese Manchurian Wrap.",
        description: "Crunchy, fried to perfection manchurian balls when drizzled with perfectly balanced chilly cheese sauce is topped with crunchy onions & wrapped in soft paratha you get a perfectly umami wrap. Cravings done right.",
        price: 139,
        originalPrice: 189,
        rating: 4.6,
        image: "/images/wrap4.avif",
        category: "Veg",
      },
      {
        name: "Classic Peppy Chicken Shawarma",
        description: "Wrap your taste buds around warm kuboos or rumali roti, with spiced chicken and garlic mayo,. You don't need a genie to satisfy this food craving!",
        price: 139,
        originalPrice: 198,
        rating: 4.2,
        image: "/images/wrap5.avif",
        category: "Non-Veg",

      },
      {
        name: "Spicy Paneer Burger Wrap",
        description: "Paneer coated & fried till golden brown is generously drizzled with spicy chipotle mayo & wrapped in a flaky paratha with crunchy lettuce & onion slices. The perfect textures & taste, all wrapped up!",
        price: 229,
        originalPrice: 298,
        rating: 4.9,
        image: "/images/wrap6.avif",
        category: "Veg",

      },
  ];

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState(""); 

  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) => {
    if (selectedFilter === "All") return true;
    return product.category === selectedFilter;
  });


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "size") {
      const sizeA = a.size || "";
      const sizeB = b.size || ""; 
      return sizeA.localeCompare(sizeB); 
    } else if (sortBy === "rating") {
      return b.rating - a.rating; 
    }
    return 0; 
  });
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="app">
      <main className="content">
        <div className="content-header">
          <h1>Indulgent wraps loaded with high protein fillings</h1>
          <div className="filters">
            <button
              className={`filter-button ${selectedFilter === "All" ? "active" : ""}`}
              onClick={() => setSelectedFilter("All")}
            >
              All
            </button>
            <button
              className={`filter-button ${selectedFilter === "Veg" ? "active" : ""}`}
              onClick={() => setSelectedFilter("Veg")}
            >
              Veg
            </button>
            <button
              className={`filter-button ${selectedFilter === "Non-Veg" ? "active" : ""}`}
              onClick={() => setSelectedFilter("Non-Veg")}
            >
              Non-Veg
            </button>

            <select
              className="sort-dropdown"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="">Sort by</option>
              <option value="size">Size</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {sortedProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-details">
                <span className="rating">★ {product.rating}</span>
                <span className="price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
              </div>
              <button className="add-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Wrap;
