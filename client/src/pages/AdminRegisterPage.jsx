import React, { useState } from 'react';
import axios from 'axios';

const AdminRegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        // 도메인 자동 생성 (랜덤한 6자리 숫자 생성)
        const randomDomain = `shop-${Math.floor(100000 + Math.random() * 900000)}`;

        try {
            const response = await axios.post('http://localhost:5000/api/auth/admin-register', {
                username,
                password,
                domain: randomDomain, // 서버로 도메인도 함께 전달
            });
            console.log('관리자 아이디 생성 성공:', response.data);
            alert('관리자 회원가입 성공!');
        } catch (error) {
            console.error('관리자 아이디 생성 실패:', error);
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default AdminRegisterPage;
