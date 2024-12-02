const express = require('express');
const router = express.Router();

// @desc    Test route for shopping malls
// @route   GET /api/malls/test
// @access  Public
router.get('/test', (req, res) => {
    res.json({ message: 'Mall route is working!' });
});

module.exports = router;
