import React, { useEffect } from "react";
import "../home/home.css";
import Menusection from "../menusection/menusection";

const HomePage = () => {

  useEffect(() => {
    // Check if geolocation is available
    if (navigator.geolocation) {
      // Request the user's location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Successful location access, you can use position.coords
          console.log("Location Access Granted:", position);
        },
        (error) => {
          // Handle errors (if the user denies access, for example)
          console.error("Location Access Denied:", error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="home-container">
      <section className="welcome-section">
        <div className="welcome-content">
          {/* Your content */}
        </div>
      </section>
      <Menusection />
    </div>
  );
};

export default HomePage;
