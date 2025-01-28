import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const LoginPage = () => {
    const navigation = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigation('/dashboard')
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Routes>
                <Route path={'/dashboard'} element={<Dashboard/>}/>
            </Routes>
            <div>
                <h1 className="text-center mb-4">Login</h1>
                <Card style={{ width: '22rem' }} className="p-4 shadow">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                aria-describedby="passwordHelpBlock"
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and
                                numbers, and must not contain spaces, special characters, or
                                emoji.
                            </Form.Text>
                        </Form.Group>

                        {/* Submit Button */}
                        <Button variant="dark" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
