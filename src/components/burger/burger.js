import React, { useState } from "react";
import { useCart } from "../cartcontext/cartcontext"; 
import "../pizza/pizzamenu.css";

const Burger = () => {

  const products = [
    {
      name: "American BBQ Veggie Burger",
      description: "Crispy corn & cheese patty with a cheese slice, topped with crunchy lettuce, onions and tomatoes, complemented with our famous smoky BBQ sauce and placed between classic toasted buns",
      price: 99,
      originalPrice: 109,
      rating: 4.3,
      image: "/images/burger2.avif",
      category: "Veg",
    },
    {
      name: "Spicy Chicken Burger",
      description: "A juicy chicken breast marinated in our unique, fiery blend of peppers and spices, fried to juicy perfection with crisp lettuce, chillies, and Chipotle sauce between premium glazed buns. Delivering a kick of flavor through & through with Wendy's original spicy chicken patty!",
      price: 139,
      originalPrice: 225,
      rating: 4.4,
      image: "/images/burger3.avif",
      category: "Non-Veg",
    },
    {
        name: "Cheese Blast Bun Tikki Burger",
        description: "Experience our Cheese Blast Patty & Perfectly seasoned aloo patty, crunchy on the outside, mouth melting inside, topped with onion rings, finished with our secret blend of chipotle sauce, ketchup, mayo and nestled inside freshly toasted classic buns. Nostalgia never tasted this good",
        price: 99,
        originalPrice: 129,
        rating: 4.8,
        image: "/images/burger4.avif",
        category: "Veg",
      },
      {
        name: "Cheese Blast Mexican Chicken Burger",
        description: "Experience our Cheese Blast Patty in our most loved Mexican Cheese Chicken Burger, crispy chicken patty with crunchy lettuce, onion rings and dilchips, a cheese slice between freshly toasted buns. Its chesse chicken flavor will leave you wanting more!",
        price: 149,
        originalPrice: 228,
        rating: 4.7,
        image: "/images/burger5.avif",
        category: "Non-Veg",

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
          <h1>Stacked & packed for heavy duty</h1>
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

export default Burger;
