import React, { useState } from 'react';
import './App.css';
import Img from './image/download.jpg';

const Form = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e){
    setEmail(e.target.value);  
  };


  function handlePasswordChange (e){
    setPassword(e.target.value);  
  };

  function reset(){
    setEmail("");
    setPassword("");
  }
  function formsubmit(e){
    e.preventDefault();
  }



  return (


    <div className="form">
    <div className="image-container">
      <figure className='className="profile-image"'><img src={Img} alt="Profile"  /></figure>
    </div>

    <div className='form'>
      <form className="form-control" onSubmit={formsubmit}>
        <p className="title">Login Page</p>
        
        <div className="input-field">
          <input
            required
            className="input"
            type="text"
            value={email}  
            onChange={handleEmailChange}  
          />
          <label className="label">Enter Email</label>
        </div>

        <div className="input-field">
          <input
            required
            className="input"
            type="password"
            value={password}  
            onChange={handlePasswordChange}  
          />
          <label className="label">Enter Password</label>
        </div>

        <div className="options">
          <label className="remember-me">
            <input type="checkbox" className="checkbox" /> Remember me
          </label>
        </div>

        <div className="forgot-password-container">
          <a href="#" className="forgot-password">Forgot your password?</a>
        </div>



        <button onClick={reset} className="submit-btn"> Reset</button>
      </form>

 
      <div className="input-display">
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
    </div>
  );
};

export default Form;
