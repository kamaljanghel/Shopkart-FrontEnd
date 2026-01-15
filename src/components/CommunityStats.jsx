import React from 'react';
import './CommunityStats.css';

const CommunityStats = () => {
  const stats = [
    {
      platform: 'YouTube',
      icon: '📺',
      count: '10K+',
      description: 'Subscribers',
    },
    {
      platform: 'Enrollments',
      icon: '🎓',
      count: '40+',
      description: 'Active Learners',
    },
    {
      platform: 'LinkedIn',
      icon: '💼',
      count: '10K+',
      description: 'Followers',
    },
  ];

  return (
    <section className="community-section">
      <h2 className="community-title">Our Community & Success</h2>
      <p className="community-subtitle">
        We are constantly growing and so is our community.
      </p>

      <div className="community-grid">
        {stats.map((item, index) => (
          <div className="community-card" key={index}>
            <span className="community-icon">{item.icon}</span>
            <h3 className="community-count">{item.count}</h3>
            <p className="community-desc">{item.description}</p>
            <p className="community-platform">{item.platform}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityStats;
