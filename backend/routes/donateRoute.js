const express = require('express');
const router = express.Router();
const { createDonation } = require('../controllers/donationcontroller');

// POST /api/donate - Create a payment intent
router.post('/donate', createDonation);

module.exports = router;