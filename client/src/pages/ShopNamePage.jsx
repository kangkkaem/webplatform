import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShopNamePage = () => {
    const [shopName, setShopName] = useState('');
    const navigate = useNavigate();

    const handleShopNameSubmit = async (e) => {
        e.preventDefault();

        try {
            const userId = '로그인한 사용자 ID'; // 실제 로그인 사용자 ID 가져오기
            const response = await axios.post('http://localhost:5000/api/shop/create', { userId, shopName });
            console.log(response.data.message); // 성공 메시지 출력
            navigate('/dashboard'); // 관리 페이지로 이동
        } catch (error) {
            console.error(error.response.data.message); // 에러 메시지 출력
        }
    };

    return (
        <form onSubmit={handleShopNameSubmit}>
            <input
                type="text"
                placeholder="Enter your shop name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
            />
            <button type="submit">Create Shop</button>
        </form>
    );
};

export default ShopNamePage;
