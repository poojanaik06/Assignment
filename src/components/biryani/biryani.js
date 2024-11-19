import React, { useState } from "react";
import { useCart } from "../cartcontext/cartcontext"; 
import "../pizza/pizzamenu.css";

const Biryani = () => {

  const products = [
    {
      name: "Zaikedaar Paneer Biryani (Paneer Dum Biryani)",
      description: "Soft, fresh paneer pieces are marinated with exquisite royal masalas & layered with basmati rice to create a dish that is as delectable as it is extravagant. Indulge in this masterpiece with mint raita.",
      price: 269,
      originalPrice: 379,
      rating: 4.4,
      image: "/images/biryani2.avif",
      category: "Veg",
    },
    {
      name: "Dum Gosht Biryani (Dum Mutton Biryani, Boneless)",
      description: "In this most enigmatic & treasured recipe of Behrouz, immaculately spiced and succulent mutton pieces are layered with fragrant basmati and slow-cooked on a charcoal fire. Savour this delicious offering with mint raita.",
      price: 499,
      originalPrice: 559,
      rating: 4.3,
      image: "/images/biryani3.avif",
      category: "Non-Veg",
    },
    {
        name: "Taj-e-Khumb Biryani (Mushroom Biryani)",
        description: "Prepared with large chunks of tender, marinated mushrooms, this unique peshkash is adorned with the flavour of 23 shahi masalas and golden-hued basmati. Indulge in a ruhaani daawat with this flavourful veg biryani, as grand as the Taj!",
        price: 269,
        originalPrice: 385,
        rating: 4.4,
        image: "/images/biryani4.avif",
        category: "Veg",
      },
      {
        name: "Do Gosht ki Dum Biryani (Mutton & Chicken Dum Biryani)",
        description: "antalise your tastebuds with this epicurean delight! Succulent chicken & mutton pieces marinated in aromatic spices and dum-pukht with long-grain basmati, served with mint raita.",
        price: 399,
        originalPrice: 509,
        rating: 4.2,
        image: "/images/biryani5.avif",
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
          <h1>Handcrafted, Royal Biryanis</h1>
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

export default Biryani;
