import React from 'react';
import styled from 'styled-components';
import Img from './image/download.jpg'; // Make sure the image is correctly placed

const App = () => {
  return (
    <StyledWrapper>
      <div className="image-container">
        <img src={Img} alt="User" className="profile-image" />
      </div>
      <form className="form-control" action="#">
        <p className="title">Login</p>
        <div className="input-field">
          <input required className="input" type="text" />
          <label className="label" htmlFor="input">Enter Email</label>
        </div>
        <div className="input-field">
          <input required className="input" type="password" />
          <label className="label" htmlFor="input">Enter Password</label>
        </div>

        <div className="options">
          <label className="remember-me">
            <input type="checkbox" className="checkbox" /> Remember me
          </label>
        </div>
        
        <a href="#">Forgot your password?</a>
        <button className="submit-btn">Sign In</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  // Align content vertically
  min-height: 100vh;
  background-color: #f0f0f0;

  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px; // Adjust margin for spacing between image and form
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .form-control {
    margin: 20px;
    background-color: #ffffff;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 25px;
    border-radius: 8px;
  }

  .title {
    font-size: 28px;
    font-weight: 800;
    text-align: center;
  }

  .input-field {
    position: relative;
    width: 100%;
  }

  .input {
    margin-top: 15px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    height: 45px;
    border: 1.5px solid #ecedec;
    background: transparent;
    padding-left: 10px;
  }

  .input:focus {
    border: 1.5px solid #2d79f3;
  }

  .input-field .label {
    position: absolute;
    top: 25px;
    left: 15px;
    color: #ccc;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 2;
  }

  .input-field .input:focus ~ .label,
  .input-field .input:valid ~ .label {
    top: 5px;
    left: 5px;
    font-size: 12px;
    color: #2d79f3;
    background-color: #ffffff;
    padding-left: 5px;
    padding-right: 5px;
  }

  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }

  .remember-me {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #555;
  }

  .checkbox {
    margin-right: 5px;
  }

  .submit-btn {
    margin-top: 30px;
    height: 55px;
    background: #f2f2f2;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(180deg, #363636 0%, #1b1b1b 50%, #000000 100%);
    box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
  }

  .submit-btn:hover {
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #0000003a;
  }
`;

export default App;
