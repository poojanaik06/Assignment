import React, { useState } from "react";
import { useCart } from "../cartcontext/cartcontext"; 
import "../pizza/pizzamenu.css";

const Pizzamenu = () => {

  const products = [
    {
      name: "Tandoori Paneer Tikka Small Pizza (Serves 2)",
      description: "Tender Paneer Tikka, Corn, Onion, Mozzarella Cheese. Enjoy the deliciousness of paneer with colourful veggies & mouth-watering cheese in every bite!",
      price: 699,
      originalPrice: 469,
      rating: 4.3,
      image: "/images/pizza2.avif",
      category: "Veg",
      size: "small",
    },
    {
      name: "Chicken Maximus Medium Pizza",
      description: "Barbeque Chicken, Sliced Chicken Meatballs, Chicken Sausages, Chicken Kheema, Onion, Mozzarella Cheese.",
      price: 399,
      originalPrice: 499,
      rating: 4.1,
      image: "/images/pizza3.avif",
      category: "Non-Veg",
      size: "medium"
    },
    {
        name: "Corn Veggie Delight",
        description: "American Corn, Crunchy Bell Peppers, Onion, Mozzarella Cheese. Enjoy the delightful flavours of golden corn, crunchy peppers, onions & cheese with this classic pizza.",
        price: 469,
        originalPrice: 510,
        rating: 4.2,
        image: "/images/pizza4.avif",
        category: "Veg",
        size: "medium",
      },
      {
        name: "Bad Boy Butter Chicken large Pizza (Serves 2)",
        description: "Chicken Tikka Chunks, Butter Chicken Gravy, Capsicum, Tomato, Onion",
        price: 599,
        originalPrice: 699,
        rating: 4.3,
        image: "/images/pizza5.avif",
        category: "Veg",
        size: "large",
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
          <h1>Pizzas with Standout toppings</h1>
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

export default Pizzamenu;
