const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // 문의 작성자
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, enum: ['pending', 'resolved'], default: 'pending' }, // 상태: 대기/완료
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

module.exports = mongoose.model('Inquiry', inquirySchema);
