

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MessageList from './components/MessageList';
import SendMessage from './components/SendMessage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/messages" element={<MessageList />} />
                <Route path="/send" element={<SendMessage />} />
                <Route path="/" element={<MessageList />} />
            </Routes>
        </Router>
    );
};

export default App;

