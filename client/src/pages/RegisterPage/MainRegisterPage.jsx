import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MainRegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          await axios.post('http://localhost:5000/api/auth/register', { username,email, password });
          alert(`${username}님, 회원가입이 완료되었습니다!`);
          navigate('/login'); // 로그인 페이지로 이동
      } catch (error) {
          console.error('회원가입 실패:', error);
          alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
              type="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
      </form>
  );
};

export default MainRegisterPage;