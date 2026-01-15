import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.id]: e.target.value});
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8084/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token to localStorage
        localStorage.setItem('token', data.token);
        alert('Login successful');
        window.location.href = '/'; // redirect to homepage
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Error connecting to server');
    }
  };

  return (
    <>
      <Header />
      <main className="login-container">
        <div className="login-box">
          <h2>Login to KamalTech</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required onChange={handleChange} />
            </div>

            <button type="submit" className="btn-primary">Login</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
