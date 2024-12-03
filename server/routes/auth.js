const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User'); // User 스키마 임포트
const Admin = require('../models/Admin'); // Admin 스키마 임포트
const bcrypt = require('bcrypt'); 
const authenticateUser = require('../middleware/authenticateUser ')


// 회원가입 라우트
router.post('/register', async (req, res) => {
  console.log('POST 요청이 /api/auth/register 라우트로 들어왔습니다.');
  console.log(req.body); 
  const { username, email, password } = req.body;

  try {
    // 비밀번호 암호화
    const saltRounds = 10; // 암호화 강도 (높을수록 보안은 좋아지지만 속도는 느려짐)
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 유저 생성
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    console.log(await User.findOne({ email }));

    return res.status(201).json({ message: '회원가입 성공' });
   
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: '회원가입 실패' });
  }
});

// 관리자 회원가입
router.post('/admin-register',authenticateUser, async (req, res) => {
  console.log('POST 요청이 /api/auth/admin-register 라우트로 들어왔습니다.');
  console.log(req.body); 
  const { adminName, password,phoneNumber } = req.body;
  const userId = req.userId;
  if (!userId) {
    return res.status(400).json({ error: '로그인이 필요합니다.' });
  }
  try {
      // 비밀번호 암호화
      const hashedPassword = await bcrypt.hash(password, 10);

      // 데이터베이스에 사용자 저장
      const newAdmin = new Admin({
          adminName,
          password: hashedPassword,
          phoneNumber,
          userId,
          // domain, // 자동 생성된 도메인
      });

      await newAdmin.save();
      res.status(201).json({ message: '관리자 아이디 생성 완료', admin: newAdmin });
  } catch (error) {
    console.error("Admin creation error:", error); // 좀 더 자세한 오류 로그
    return res.status(500).json({ error: '관리자 아이디 생성 실패', details: error.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  
  const { email, password } = req.body;
  console.log('로그인 요청 데이터:', { email, password });

  const user = await User.findOne({ email });
    if (!user) {
        console.log('해당 이메일 없음:', email);
        return res.status(401).json({ error: '아이디가 틀렸습니다.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('비밀번호 확인 결과:', isPasswordValid);

    if (!isPasswordValid) {
        return res.status(401).json({ error: '비밀번호가 틀렸습니다.' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token, username: user.username });
});

module.exports = router;
