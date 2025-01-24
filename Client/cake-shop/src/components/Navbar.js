import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f8b400' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
      <Link to="/price" style={{ margin: '10px' }}>Price</Link>
    </nav>
  );
};

export default Navbar;
