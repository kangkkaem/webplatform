import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectFieldPage = () => {
    const navigate = useNavigate();
    const fields = ['의류', '기술', '악세사리', '책', '서비스', '기타'];

    const handleFieldSelect = (field) => {
        console.log('Selected field:', field); // 선택된 필드 로그 출력
        navigate('/shop-name'); // 다음 페이지로 이동
    };

    return (
        <div>
            <h1>Select a Field</h1>
            <div>
                {fields.map((field, index) => (
                    <button key={index} onClick={() => handleFieldSelect(field)}>
                        {field}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SelectFieldPage;
