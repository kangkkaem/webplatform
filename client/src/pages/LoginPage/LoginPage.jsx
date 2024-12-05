import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Sending login data:', { username, password });

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email: username,
                password,
            });

            //로그인성공
            const { token, username: loggedInUsername } = response.data;
            localStorage.setItem('token', token);
            setUser(loggedInUsername);
            
            alert(`${loggedInUsername}님 환영합니다!`);
            navigate('/');
        } catch (err) {
            console.error('Error details:', err.response);
            setError('아이디 또는 비밀번호가 틀렸습니다.');
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    아이디:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    비밀번호:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">로그인</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default LoginPage;
