const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = 'mongodb://127.0.0.1:27017/web'; // 로컬 MongoDB
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB 연결 성공!');
    } catch (err) {
        console.error('MongoDB 연결 실패:', err);
        process.exit(1); // 실패 시 종료
    }
};

module.exports = connectDB;
