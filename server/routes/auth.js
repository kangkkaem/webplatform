const express = require('express');
const router = express.Router();
const User = require('../models/User'); // User 스키마 임포트

// 회원가입 라우트
router.post('/register', async (req, res) => {
  console.log('POST 요청이 /api/auth/register 라우트로 들어왔습니다.');
  console.log(req.body); 
  const { username, password, email } = req.body;

  try {
    // 유저 생성
    const newUser = new User({ username, password, email });
    await newUser.save();
    return res.status(201).json({ message: '회원가입 성공' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: '회원가입 실패' });
  }
});

module.exports = router;
