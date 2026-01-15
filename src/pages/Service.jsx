import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommunityStats from '../components/CommunityStats';
import './Service.css';
import { Link } from 'react-router-dom';
import DevTabSection from '../components/DevTabSection ';

const Services = () => {
    return (
        <>
            <Header />

            <main className="services-container">
                <section className="services-banner">
                    <img
                        src={require("../assets/background/background2.jpg")}
                        alt="Services Background"
                        className="services-banner-image"
                    />
                    <div className="services-banner-text">
                        <h2 className="services-title">Our Services</h2>
                        <p className="services-subtext">
                            At TechnoSock, we offer a wide range of modern software services to help your business grow and scale with confidence.
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services-section">
                    <div className="service-grid">
                        <div className="service-card">
                            <Link to="/service">
                                <h3>Product Engineering</h3>
                            </Link>
                            <p>Transform your ideas into powerful digital products, develop scalable, secure,
                                and intuitive solutions.</p>
                        </div>

                        <div className="service-card">
                            <Link to="/service">
                                <h3>AI / GenAI Solutions</h3> </Link>
                            <p>Leverage power of Artificial Intelligence and Generative AI to automate workflows, build intelligent.</p>
                        </div>

                        <div className="service-card">
                            <Link to="/service">
                                <h3>Technical Consulting</h3> </Link>
                            <p>Our consultants help you choose the right technology, tools, and architecture for success.</p>
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="service-grid">
                        <div className="service-card">
                            <Link to="/GenAIStudyNotes">
                                <h3>Product Engineering</h3>
                            </Link>
                            <p>
                                Transform your ideas into powerful digital products, develop scalable, secure,
                                and intuitive solutions.
                            </p>
                        </div>
                    </div>

                </section>

                <section>
                    <DevTabSection></DevTabSection>
                </section>
                <br></br>


                <section>
                    <CommunityStats></CommunityStats>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Services;
