import React from "react";
import "./DevTabSection.css";

// Company logos
import company0 from "../assets/companies/comp1.png";
import company1 from "../assets/companies/comp2.png";
import company2 from "../assets/companies/comp3.png";

const DevTabSection = () => {
  const companies = [
    { name: "Google", logo: company0 },
    { name: "StarBucks", logo: company1 },
    { name: "Apple", logo: company2 },
  ];

  return (
    <section className="devtab-section">
      <div className="devtab-content">
        <h2 className="devtab-title">Our Network</h2>
        <p className="devtab-subtitle">Companies Where We had Provided Services</p>
        <p className="devtab-description">
          We’ve proudly delivered reliable and impactful solutions to top-tier brands. 
          Our services speak for themselves through the success of our partners.
        </p>

        <div className="devtab-grid">
          {companies.map((company, index) => (
            <div key={index} className="devtab-card">
              <img
                src={company.logo}
                alt={company.name}
                className="devtab-logo"
              />
              <p className="devtab-company-name">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevTabSection;
