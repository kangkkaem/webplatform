const mongoose = require('mongoose');

const shoppingMallSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // 쇼핑몰 소유주 (User와 관계)
    mallName: { type: String, required: true },
    domain: { type: String, required: true, unique: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    renewalDate: { type: Date }, // 연장 가능 날짜
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ShoppingMall', shoppingMallSchema);
