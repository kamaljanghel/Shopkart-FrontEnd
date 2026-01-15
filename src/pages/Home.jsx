import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />

      <main className="home-container">

        {/* Hero Section */}
        <section className="hero-section">
          <h1>Welcome to TechnoSock Solutions</h1>
          <p>Empowering Innovation with Tailored Products, Expert Consulting, and Next-Gen AI Solutions</p>
          <button className="cta-button" 
          onClick={() => window.location.href = '/service'}
          >Get Started</button>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Product Engineering</h3>
                <p>Transform your ideas into powerful digital products, develop scalable, secure, 
                                and intuitive solutions.</p>
            </div>
            <div className="service-card">
              <h3>AI / GenAI Solutions</h3>
              <p>Leverage power of Artificial Intelligence and Generative AI to automate 
                workflows, build intelligent.</p>
            </div>
            <div className="service-card">
              <h3>Technical Consulting</h3>
              <p>Our consultants help you choose the right technology, tools, 
                and architecture for success.</p>
            </div>
          </div>
        </section>

        {/* 💡 About Highlights */}
<section className="about-highlight-section">
  <h2>💡 Why Choose Us?</h2>
  <ul>
    <li>✅ 10+ Years of Engineering Excellence</li>
    <li>🚀 Agile & Efficient Teams</li>
    <li>🎯 Outcome-Focused Delivery</li>
    <li>🌍 Trusted by Startups & Enterprises Globally</li>
  </ul>
</section>

        {/* Testimonials */}
        <section className="testimonial-section">
          <h2>What Our Clients Say</h2>
          <blockquote>
            “TechnoSock Solutions transformed our idea into a full-fledged SaaS product. Highly professional and always on time!”
          </blockquote>
          <p className="client-name">— Jane Doe, CEO of InnovateX</p>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Ready to Build Something Great?</h2>
          <p>Let's collaborate to bring your product to life.</p>
          <button className="cta-button" 
            onClick={() => window.location.href = '/about'}>Contact Us</button>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;
