import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import LoginPage from './pages/LoginPage';
import MainRegisterPage from './pages/MainRegisterPage';
import AdminRegisterPage from './pages/AdminRegisterPage';
import Navbar from './components/Navbar'; 

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // 서버에 토큰 검증 요청을 보내거나, 직접 사용자 정보를 복구
      setUser('로그인된 유저 이름'); // 서버로부터 받은 사용자 이름을 설정
    }
  }, []);

  return (
    <div>
        
      
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<MainPage />} />
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
