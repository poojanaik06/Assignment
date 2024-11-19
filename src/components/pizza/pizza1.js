import React from "react";
import "../pizza/pizza1.css";

function Pizza() {
  return (
    <div className="container">
      <div className="meal-card">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/300"
            alt="Sabudana Khichdi Meal"
            className="meal-image"
          />
        </div>
        <div className="meal-info">
          <h1 className="meal-title">
            Sabudana Khichdi Curd Meal with Aloo Pattice
          </h1>
          <p className="meal-details">
            <b>(NO ONION, NO GARLIC & MADE WITH SENDHA NAMAK)</b> All time
            favourite upvas essential.
          </p>
          <div className="price-section">
            <span className="current-price">₹139</span>
            <span className="original-price">₹259</span>
          </div>
          <button className="add-button">Add</button>
        </div>
      </div>
      <div className="nutrition-info">
        <h2>Nutritional value</h2>
        <div className="nutrition-grid">
          <div className="nutrition-item">
            <p>Calories</p>
            <b>1189 Kcal</b>
          </div>
          <div className="nutrition-item">
            <p>Proteins</p>
            <b>21 grams</b>
          </div>
          <div className="nutrition-item">
            <p>Fats</p>
            <b>39 grams</b>
          </div>
          <div className="nutrition-item">
            <p>Carbs</p>
            <b>188 grams</b>
          </div>
          <div className="nutrition-item">
            <p>Sugar</p>
            <b>17 grams</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
