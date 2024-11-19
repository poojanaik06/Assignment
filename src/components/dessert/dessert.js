import React, { useState } from "react";
import { useCart } from "../cartcontext/cartcontext"; 
import "../pizza/pizzamenu.css";

const Dessert = () => {

  const products = [
    {
      name: "Belgian Dark Chocolate (100 ml)",
      price: 106,
      rating: 4,
      image: "/images/dessert2.avif",
    },
    {
      name: "Madagascar Chocolate Bar (70 ml)",
      price: 114,
      rating: 4.1,
      image: "/images/dessert3.avif",
    },
    {
        name: "Malai Kulfi (100 ml)",
        price: 102,
        rating: 4.8,
        image: "/images/dessert4.avif",
      },
      {
        name: "Mad Over Mango (100 ml)",
        price: 192,
        rating: 4.5,
        image: "/images/dessert5.avif",
      },
  ];
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState(""); 
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

  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="app">
      <main className="content">
        <div className="content-header">
          <h1>Ice Cream, Dessert</h1>
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

export default Dessert;
