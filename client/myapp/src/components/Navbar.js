import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">In-Game Chat</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Global Chat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Team Chat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/private">Private Chat</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;