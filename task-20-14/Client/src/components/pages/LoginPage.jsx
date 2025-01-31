import React from 'react';
import styled from 'styled-components';
import LoginOptions from './LoginOptions';

const LoginPage = () => {
  return (
    <StyledWrapper>
      <div className="container mt-10">
      <img src="https://www.creocommunity.es/wp-content/uploads/2023/10/GTA-6-Cierre-de-anuncio-con-el-Nuevo-logo-de.png" className='h-36 ml-5' alt="" />
        <div className="card mt-5">
          <a className="login">Log in</a>
          <div className="inputBox">
            <input type="text" required="required" />
            <span className="user">Username</span>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
          </div>
          
          <a href="https://www.rockstargames.com/gta-online">
          <button className="enter" >Enter</button>
          </a>

          <p className='text-1xl'>Login with</p>
          <LoginOptions/>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .login {
    color: #000;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    font-weight: bold;
    font-size: x-large;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 450px;
    width: 300px;
    flex-direction: column;
    gap: 35px;
    background:rgba(227, 227, 227, 0.52);
    box-shadow: 16px 16px 32px #c8c8c8,
          -5px -5px 32px #fefefe;
    border-radius: 8px;
  }

  .inputBox {
    position: relative;
    width: 250px;
  }

  .inputBox input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    color: #000;
    font-size: 1em;
    background: transparent;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    transition: 0.1s;
    border-bottom-left-radius: 8px;
  }

  .inputBox span {
    margin-top: 5px;
    position: absolute;
    left: 0;
    transform: translateY(-4px);
    margin-left: 10px;
    padding: 10px;
    pointer-events: none;
    font-size: 12px;
    color: #000;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 3px;
    border-radius: 8px;
  }

  .inputBox input:valid~span,
  .inputBox input:focus~span {
    transform: translateX(113px) translateY(-15px);
    font-size: 0.8em;
    padding: 5px 10px;
    background: #000;
    letter-spacing: 0.2em;
    color: #fff;
    border: 2px;
  }

  .inputBox input:valid,
  .inputBox input:focus {
    border: 2px solid #000;
    border-radius: 8px;
  }

  .enter {
    height: 45px;
    width: 100px;
    border-radius: 5px;
    border: 2px solid #000;
    cursor: pointer;
    background-color: transparent;
    transition: 0.5s;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
    margin-bottom: 1em;
  }

  .enter:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }`;

export default LoginPage;
