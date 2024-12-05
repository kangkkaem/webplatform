import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <nav>
      {user ? (
        <div>
          <span>{user}님 환영합니다!</span>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </nav>
  );
};

export default Navbar;
