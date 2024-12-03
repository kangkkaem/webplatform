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

// 관리자 회원가입
router.post('/admin-register', async (req, res) => {
  const { username, password, domain } = req.body;

  try {
      // 비밀번호 암호화
      const hashedPassword = await bcrypt.hash(password, 10);

      // 데이터베이스에 사용자 저장
      const newAdmin = new User({
          username,
          password: hashedPassword,
          domain, // 자동 생성된 도메인
      });

      await newAdmin.save();
      res.status(201).json({ message: '관리자 아이디 생성 완료', admin: newAdmin });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: '관리자 아이디 생성 실패' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      // MongoDB에서 아이디 확인
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'email을 다시 입력해주세요!' });

      // 비밀번호 비교
      const isMatch = password === user.password; // 실제로는 bcrypt 같은 해시 사용 권장
      if (!isMatch) return res.status(400).json({ message: '비밀번호를 다시 입력해주세요!' });

      // 성공 시 응답
      res.status(200).json({ message: '로그인 성공', userId: user._id });
  } catch (err) {
      res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
