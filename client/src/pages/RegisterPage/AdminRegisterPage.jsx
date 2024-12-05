import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminRegisterPage = () => {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();
        console.log('Sending login data:', { adminName, password,phoneNumber });
        // 도메인 자동 생성 (랜덤한 6자리 숫자 생성)
        // const randomDomain = `shop-${Math.floor(100000 + Math.random() * 900000)}`;

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('로그인이 필요합니다.');
                return;
            }
            const response = await axios.post('http://localhost:5000/api/auth/admin-register', {
                adminName,
                password,
                phoneNumber }, // 서버로 도메인도 함께 전달
            { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}}, 
        );
            console.log('관리자 아이디 생성 성공:', response.data);
            alert('관리자 회원가입 성공!');
            navigate('/admin-dashboard');
        } catch (error) {
            console.error('관리자 아이디 생성 실패:', error.response);
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div>
            <h1>관리자 회원가입</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>아이디:</label>
                    <input
                        type="text"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>비밀번호:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>핸드폰번호:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default AdminRegisterPage;
