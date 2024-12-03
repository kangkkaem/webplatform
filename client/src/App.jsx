import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import LoginPage from './pages/LoginPage';
import MainRegisterPage from './pages/MainRegisterPage';
import AdminRegisterPage from './pages/AdminRegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<MainRegisterPage />} />
        <Route path="/admin-register" element={<AdminRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
