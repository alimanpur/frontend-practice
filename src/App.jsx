import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Form from './pages/Form';
import Home from './pages/HomeNew';

function App() {
  return (
    <Router>
      {/* The Navbar stays outside of Routes so it appears on every page */}
      <Navbar />
      
      <Routes>
        {/* Route definitions map URL paths to specific components */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;