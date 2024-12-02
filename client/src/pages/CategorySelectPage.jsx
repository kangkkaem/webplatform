
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './CategorySelectPage.scss';

const categories = ['의류', '전자제품', '헬스케어', '음식', '서비스', '기타'];

const CategorySelectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleContinue = () => {
    if (!selectedCategory) {
      alert('카테고리를 선택해주세요.');
      return;
    }
    console.log('선택한 카테고리:', selectedCategory);
    navigate('/shop-name');
  };

  return (
    <div className="category-select-page">
      <h1>상품 판매 분야를 선택하세요</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'selected' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <button onClick={handleContinue}>계속</button>
    </div>
  );
};

export default CategorySelectPage;
