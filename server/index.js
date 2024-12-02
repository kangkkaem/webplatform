
// auth 라우터 express 에 연결 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);

// MongoDB 연결
mongoose
  .connect('mongodb://127.0.0.1:27017/web', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));
  

// 라우터 설정
app.use('/api/auth', authRoutes); // '/api/auth' 경로로 auth 라우터 연결

// 서버 실행
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

