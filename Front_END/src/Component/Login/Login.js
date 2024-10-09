import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import './Login.css';

const Login = ({ setUser }) => { // setUser is passed as a prop here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
    // Simulate successful login (for example purposes)
    setUser({ email });
    navigate('/'); // Redirect to home after login (can be customized)
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <p>Connect with the best professionals</p>
        
        <div className="form-group">
          <label htmlFor="email">E-Mail Address *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="name@example.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <a href="/#" className="forgot-password">Forgot password?</a>
        </div>
        
        <button type="submit" className="btn-primary">Login</button>
        
        <div className="divider">OR</div>
        
        <button type="button" className="btn-secondary">Continue with Google</button>
        
        <p className="sign-up-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link> {/* Navigate to sign-up page */}
        </p>
      </form>
    </div>
  );
};

export default Login;
