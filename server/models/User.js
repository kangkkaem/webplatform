const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' }, // 역할: 관리자/사용자
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
