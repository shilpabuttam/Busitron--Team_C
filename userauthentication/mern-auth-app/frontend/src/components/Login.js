import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import icons
import "./Login.css";

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in successfully!\nEmail: ${email}`);

    localStorage.setItem("isLoggedIn", "true"); // Save login state
    setIsLoggedIn(true); // Update state

    navigate("/dashboard");
  };
  const handleGoogleLogin = () => {
    window.open("https://accounts.google.com/signin", "_blank");
  };

  // Redirect to Facebook authentication
  const handleFacebookLogin = () => {
    window.open("https://www.facebook.com/login", "_blank");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button
          type="button"
          className="signup-button"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>

        {/* Social Media Login Buttons */}
        <div className="social-login">
          <p>Or Login with</p>
          <button className="google-login" onClick={handleGoogleLogin}>
            <FaGoogle className="icon" /> Login with Google
          </button>
          <button className="facebook-login" onClick={handleFacebookLogin}>
            <FaFacebook className="icon" /> Login with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
