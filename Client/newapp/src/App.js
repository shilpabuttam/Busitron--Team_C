import React, { Suspense } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
const Header = React.lazy(() => import('./Components/Header'));
const Router = React.lazy(() => import('./Components/Router'));
function App() {
  return (
    <div>
      <Header/>
    <Suspense fallback={<div className='text-center'>
      <div className="spinner-border text-primary m-5 p-5" role="status">
      <span className="visually-hidden">Loading...</span>
      </div>
    </div>}>
    <div className="App">
        
        <Router/>
    </div>
    </Suspense>
    </div>
  );
}

export default App;
