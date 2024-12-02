import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/products" element={<div>Product List Page</div>} />
        <Route path="/admin" element={<div>Admin Dashboard</div>} />
      </Routes>
    </Router>
  );
}

export default App;
