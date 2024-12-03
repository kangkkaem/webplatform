const Shop = require('../models/Shop'); // Shop 모델 가져오기

// POST /api/shop/create
router.post('/create', async (req, res) => {
    const { userId, shopName } = req.body;

    try {
        // 새로운 쇼핑몰 생성
        const shop = new Shop({ userId, shopName });
        await shop.save();

        res.status(201).json({ message: '완료', shopId: shop._id });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
