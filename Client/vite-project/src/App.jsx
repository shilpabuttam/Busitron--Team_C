import { Link, Route, Routes, useLocation } from 'react-router-dom';

import Movies from './components/Movies';
import Shorts from './components/Shorts';
import Home from './components/Home';
import Main from './components/Main';

function App() {
  const location = useLocation(); // Get the current route location
  const showNavbar = location.pathname !== '/';

  return (
    <div className="container-fluid">
      {showNavbar && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-nav">
              <Link to="/home" className="nav-link">Home</Link>
              <Link to="/shorts" className="nav-link">Shorts</Link>
              <Link to="/movies" className="nav-link">Movies</Link>
            </div>
          </div>
        </nav>
      )}
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
