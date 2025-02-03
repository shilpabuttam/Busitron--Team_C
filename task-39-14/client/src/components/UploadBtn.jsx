import React from 'react';
import styled from 'styled-components';

const UploadButton = () => {
  return (
    <StyledWrapper>
      <li className="content__item">
        <button className="button button--pan"><span>Upload</span></button>
      </li>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .content__item {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    pointer-events: none;
  }

  .button {
    pointer-events: auto;
    cursor: pointer;
    background: #e7e7e7;
    border: none;
    padding: 1.5rem 3rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
  }

  .button::before,
  .button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .button--pan {
    font-family: aktiv-grotesk-extended, sans-serif;
    font-weight: 700;
    border: 2px solid #000;
    border-radius: 3rem;
    overflow: hidden;
    color: #fff;
  }

  .button--pan span {
    position: relative;
    mix-blend-mode: difference;
  }

  .button--pan::before {
    content: "";
    background: #000;
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }

  .button--pan:hover::before {
    transform: translate3d(0, -100%, 0);
  }`;

export default UploadButton;
