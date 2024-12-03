const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // 'Bearer <token>'에서 token만 추출

  if (!token) {
    return res.status(401).json({ message: '토큰이 없습니다.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    console.log('Decoded JWT:', decoded); // 디코딩된 정보 로그 출력

    req.userId = decoded.userId; // JWT에서 userId를 추출하여 req.userId에 저장
    next(); // 인증된 사용자만 라우트 접근 가능
  } catch (error) {
    return res.status(401).json({ message: '유효하지 않은 토큰' });
  }
};
module.exports = authenticateUser;