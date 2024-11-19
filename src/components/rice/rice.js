import React, { useState } from "react";
import { useCart } from "../cartcontext/cartcontext"; 
import "../pizza/pizzamenu.css";

const Rice = () => {

  const products = [
    {
      name: "Chicken Tikka Masala Rice Bowl",
      description: "Smoky, juicy peices of chicken is the secret to this extremely delicious dish. Marinated chicken is tandoored and cooked to perfection in a masala gravy. Served with flavourful rice this dish is sure to make your day!",
      price: 389,
      rating: 4.4,
      image: "/images/rice2.avif",
      category: "Non-Veg",
    },
    {
      name: "Mughlai Chicken Kofta Rice Bowl",
      description: "An extraordinary twist youll fall in love with. Soft chicken meatballs dipped in pipping hot gravy served with rice & salad.",
      price: 359,
      rating: 4.4,
      image: "/images/rice3.avif",
      category: "Non-Veg",
    },
    {
        name: "Corn Masala Rice Bowl",
        description: "The goodness of Mexican techniques and Indian spices makes our Makai masala bowl a meal to remember. Served with warm rice and salad.",
        price: 239,
        rating: 4.3,
        image: "/images/rice4.avif",
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
          <h1>Delicious Bowl Meals - Hygienic & Safe</h1>
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

export default Rice;
