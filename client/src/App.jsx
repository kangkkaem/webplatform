import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainRegisterPage from './pages/RegisterPage/MainRegisterPage';
import AdminRegisterPage from './pages/RegisterPage/AdminRegisterPage';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // 서버에 토큰 검증 요청을 보내거나, 직접 사용자 정보를 복구
      setUser(''); // 서버로부터 받은 사용자 이름을 설정
    }
  }, []);

  return (
    <div>
        
      <Router>
        
        <Routes>
         
          <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<MainRegisterPage />} />
          <Route path="/admin-register" element={<AdminRegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
