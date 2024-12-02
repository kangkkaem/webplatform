import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import RegisterPage from './pages/MainRegisterPage';
import CategorySelectPage from './pages/CategorySelectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<MainPage />} />
        <Route path="/start" element={<RegisterPage />} />
        <Route path="/category-select" element={<CategorySelectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
