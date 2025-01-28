import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/stream" className="nav-link">Stream</Link> 
          </Nav>
        </Container>
      </Navbar>

      <Row>
        <Col className="text-center">
          <h1>Welcome to the Dashboard</h1>
          <p>This is your dashboard. You can add more features here.</p>
          <Button variant="primary" onClick={() => alert('Feature coming soon!')}>
            Explore Features
          </Button>
        </Col>
      </Row>

      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Streamer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
            <p>Total Revenue: $0</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Donation Goals</h2>
            <p>No goals set yet.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
