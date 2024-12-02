import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    // 서버로 데이터 전송 로직 추가 예정
    console.log('회원가입 성공:', formData);
    navigate('/category-select');
  };

  return (
    <div className="register-page">
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="이름" onChange={handleChange} />
        <input type="email" name="email" placeholder="이메일" onChange={handleChange} />
        <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
        <label>
          <input type="checkbox" required /> 약관에 동의합니다.
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">계속</button>
      </form>
    </div>
  );
};

export default RegisterPage;
