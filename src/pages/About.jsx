import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import './About.css';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8084/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Thanks for reaching out! We will contact you shortly.');
        setFormData({ name: '', email: '', query: '' });
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Server error. Please try again later.');
    }
  };

  return (
    <>
      <Header />

      <main className="about-container">
        {/* About Section */}
        <section className="about-section">
          <h2>About TechnoSock</h2>
          <p>
            TechnoSock is a global product engineering company delivering scalable, secure,
            and user-focused technology solutions. We’re committed to helping startups and
            enterprises launch and grow successfully.
          </p>
        </section>

        {/* Address Section */}
        <section className="address-section">
          <h3>Our Office</h3>
          <address>
            TechnoSock Headquarters, 101 Business Street, Bangalore, Karnataka, India<br />
            <strong>Email:</strong> contact@technosock.com
          </address>
        </section>

        {/* Contact Form */}
        <section className="form-section">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="query">Your Query</label>
              <textarea 
                id="query" 
                name="query" 
                rows="4"
                value={formData.query}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>

        <section>
          <Faq />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
