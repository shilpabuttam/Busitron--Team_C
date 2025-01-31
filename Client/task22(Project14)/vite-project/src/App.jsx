// import { useState } from 'react'
// import './App.css'
// import { useEffect } from 'react'
// function App() {
//   const [msg,setMsg]=useState("");
//   const [inp,setInp]=useState("")
//   useEffect(()=>{
//     fetch('http://localhost:2500/api/message')
//     .then(res=>res.json())
//     .then((data)=>{
//       setMsg(data.message)
//     })
//   })
//   function handleSubmit(){

//   }
//   return (

//    <div>
//     <form action="">
//       <input type="text"  placeholder='enter here' onChange={(e)=>setInp(e.target.value)}/>
//       <button onSubmit={handleSubmit}>Submit</button>
//     </form>
//     <p>{msg}</p>
//    </div>
//   )
// }

// export default App

// import React from 'react'
// import { Route, Routes,Link } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Service from './components/Service'
// import Contact from './components/Contact'

// export default function App() {
//   return (
//     <div>
//       <div>
//         <Link to={'/'}>Home</Link>
//         <Link to={'/about'}>About</Link>
//         <Link to={'/contact'}>Contact</Link>
//         <Link to={'/service'}>Service</Link>
//       </div>
//       <div>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='/service' element={<Service/>}/>
//         </Routes>
//       </div>
//     </div>
//   )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import { FaUser } from 'react-icons/fa';
import './App.css'
function App() {
  return (
    <>
      <div className='w-100'>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home"><FaUser /></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/about" >About</Nav.Link>
              <Nav.Link as={Link} to="/contact"  >Contact</Nav.Link>
              <Nav.Link as={Link} to="/service" >Service</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
          </Routes>
        </div>
      </div>


    </>
  );
}

export default App;