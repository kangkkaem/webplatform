const express = require('express');
const connectDB = require('./config/db');


// 라우터 연결 
const userRoutes = require('./routes/userRoutes');
const mallRoutes = require('./routes/mallRoutes');
const { authenticateUser } = require('./middleware/userauth');

const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors()); // CORS 허용

// MongoDB 연결
connectDB();

// 미들웨어
app.use(express.json());



app.use('/api/users', userRoutes);
app.use('/api/malls', mallRoutes);
app.use('/api/admin', authenticateUser, adminRoutes);

// 서버 시작
app.listen(PORT, () => console.log(`서버가 ${PORT}번 포트에서 실행 중입니다!`));
