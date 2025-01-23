import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container-fluid'>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand px-2" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        <NavLink className="nav-link  px-2" aria-current="page" to="/addvideos">Add Video</NavLink>
        <NavLink className="nav-link px-2" to="/videos">Videos</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header