import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="custom-header">
      <div className="header-container">
        {/* 🖋️ Text-Based Logo */}
        <Link to="/" className="site-logo-text">
          <span className="techno">Techno</span><span className="sock">Sock</span>
        </Link>

        {/* 🔗 Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/service" className="nav-link">Services</Link>
          <Link to="/inventory" className="nav-link">Inventory</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </nav>

        {/* 🔐 Auth Buttons */}
        <div className="auth-links">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="auth-link">Login</Link>
              <Link to="/signup" className="auth-link signup">Signup</Link>
            </>
          ) : (
            <button className="auth-link logout" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
