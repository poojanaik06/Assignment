import React from 'react';
import '../about/about.css';

const AboutUs = () => {
  return (
    
    <div className="about-us " >
     <h1>Let's Know Who We Are</h1>
    <footer className="footer" >
        <h3><i>WHERE EVERY BITE FEELS LIKE HOME 🏠︎</i></h3>
        <p>Looking for a new dining experience? Explore the flavors of the Mangalore at your doorstep by Swift Serve</p>
        <p>Our menu features fresh, locally sourced ingredients and traditional recipes from the Coastal region.</p>

        <p>Our cozy atmosphere and attentive service make dining with us a truly unforgettable experience. </p>
        <p>Whether you’re in the mood for a romantic night out or a family dinner, our restaurant is the perfect place to discover new tastes and enjoy a delicious meal. Join us today and taste our delicious dishes.</p>
        <p>We know you’ll love our unique take on traditional Indian cuisine </p>
        <p>Come explore the flavors of Mangalore, Order!!!! How about this moment? </p>

      </footer>
      <header className='header'>
      <h3><i>MASTERS OF FLAVOURS</i></h3>
      <section className="image-grid">
        {[
          { id: 1, src: '/images/chef1.jpg', alt: '1' },
          { id: 2, src: '/images/chef2.jpg', alt: '2' },
          { id: 3, src: '/images/chef3.jpg', alt: '3' },
          { id: 4, src: '/images/chef4.png', alt: '4' },
        ].map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>
      <p><i><center>Our chefs are a team of culinary artisans renowned for their creativity, skill, and dedication to excellence. Each chef brings a wealth of experience and a unique flair to the kitchen, blending global influences with local ingredients to craft unforgettable dishes. From exquisite fine dining to comforting, casual fare, they ensure every meal is a celebration of flavor and presentation. Passionate about innovation, they continuously experiment with new techniques and recipes to delight guests with surprising twists and timeless classics. With a commitment to sustainability, they prioritize fresh, locally sourced ingredients, making every bite not only delicious but also thoughtfully prepared.</center> </i> </p>
      </header>
    </div>
  );
};

export default AboutUs;
