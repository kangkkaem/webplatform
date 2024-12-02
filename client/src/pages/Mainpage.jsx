import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './MainPage.scss';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <header className="main-header">
        <div className="logo">Godomall</div>
        <nav>
          <a href="/support">고객센터</a>
          <a href="/pricing">요금안내</a>
          <a href="/help">지원</a>
        </nav>
        <div className="auth-buttons">
          <button onClick={() => navigate('/login')}>로그인</button>
          <button onClick={() => navigate('/register')}>회원가입</button>
        </div>
      </header>
      <main>
        <h1>쉽고 빠르게 쇼핑몰 시작하기</h1>
        <button className="start-button" onClick={() => navigate('/start')}>
          무료로 시작하기
        </button>
      </main>
      <footer>
        <p>© 2024 Godomall. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;