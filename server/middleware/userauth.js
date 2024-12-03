const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: '토큰이 없습니다.' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // 토큰 디코딩
    req.userId = decoded.userId; // 사용자 ID 저장
    next();
  } catch (error) {
    res.status(401).json({ message: '토큰이 유효하지 않습니다.' });
  }
};

module.exports = { authenticateUser };
