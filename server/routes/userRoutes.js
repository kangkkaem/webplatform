const express = require('express');
const router = express.Router();

// @desc    Test route for users
// @route   GET /api/users/test
// @access  Public
router.get('/test', (req, res) => {
    res.json({ message: 'User route is working!' });
});

module.exports = router;
