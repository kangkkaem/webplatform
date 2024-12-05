import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/main-logo.png';

const TopBar = ({ user }) => {
  const navigate = useNavigate();

  const [openToggle, setOpenToggle] = useState(null); // null: 모두 닫힘

  const handleToggle = (main) => {
    setOpenToggle((prev) => (prev === main ? null : main)); // 같은 메뉴 클릭 시 닫힘
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown") && !event.target.closest(".toggle-btn")) {
      setOpenToggle(null); // 외부 클릭 시 모든 토글 닫기
    }
  };
  
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="top-bar">
      <div className="top-bar-left">
          <img
            src={logo}
            className="logo"
            alt="logo"
            onClick={() => navigate('/')}
          />
          <nav className="menu">
            <div className="dropdown">
              <button onClick={() => handleToggle("main")} className="toggle-btn">메인홈</button>
              <div className="dropdown-content">
                {openToggle === "main" && <div className="dropdownList">
                          <ul>
                              <li>운영 관리</li>
                              <li>운영 보고</li>
                              <li>운영 설정</li>
                          </ul>
                      </div>
                }
                </div>
            </div>
            <div className="dropdown">
              <button onClick={() => navigate('/about')}>회사소개</button>
            </div>
            <div className="dropdown">
              <button onClick={() => navigate('/pricing')}>요금안내</button>
            </div>
          <div className="dropdown">
            <button onClick={() => handleToggle("operate")} className="toggle-btn">운영</button>
            <div className="dropdown-content">
              {openToggle === "operate" && <div className="dropdownList">
                      <ul>
                          <li>운영 관리</li>
                          <li>운영 보고</li>
                          <li>운영 설정</li>
                      </ul>
                  </div>
                  }
              </div>
            </div>
            <div className="dropdown">
              <button onClick={() => navigate('/support/help')}>도움말</button>
            </div>
            <div className="dropdown">
              <button onClick={() => navigate('/mall-migration')}>쇼핑몰 이전</button>
             </div>
          </nav>
        </div>
         
      <div className="top-bar-right">
        {user ? (
          <>
            <span>{user}님</span>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')}>로그인</button>
        )}
        <button className="category-icon">카테고리</button>
      </div>
    </div>
  );
};

export default TopBar;
