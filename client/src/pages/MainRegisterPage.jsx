import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MainRegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          await axios.post('http://localhost:5000/api/auth/register', { email, password });
          navigate('/login'); // 로그인 페이지로 이동
      } catch (error) {
          console.error(error.response.data.message);
      }
  };

  return (
      <form onSubmit={handleSubmit}>
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