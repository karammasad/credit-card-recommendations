import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import CreditDashboard from './pages/CreditDashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/credit-dashboard" element={<CreditDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
