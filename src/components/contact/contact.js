import React, { useState } from 'react';
import '../contact/contact.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission 
    console.log(formData);

    // Alert message after form submission
    alert('Your request has been sent successfully! We will get back to you shortly.');

    // Clearing the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      occasion: '',
      budget: '',
      message: '',
    });
  };

  return (
    <div className="contact-form">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Fill this form to write us on celebrations@swiftserve</p>
        <p><strong>Central restaurant:</strong></p>
        <p>Sahyadri Campus, Mangaluru, Adyar, Karnataka 575007</p>
      </div>

      <div className="contact-form-fields">
        <h2>Get in Touch with Us</h2>
        <p>We do not share this information with outside parties.</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="occasion">Occasion</label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            />
            <label htmlFor="budget">Budget</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message and Instructions for Order</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Send Request</button>
        </form>
      </div>

      {/* Google Map Section - Positioned Below the Form */}
      <div className="contact-map">
        <h2>Our Location</h2>
        <p>Find us at our central location:</p>
        <div style={{ width: '100%', height: '400px' }}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.63896684975!2d74.92280267507473!3d12.866579587439192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20Of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sin!4v1732043686844!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
