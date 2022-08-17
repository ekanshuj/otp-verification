const express = require('express');
const router = express.Router();

const { createOTP, verifyOTP } = require('../controllers/userControllers');


router.post('/create', createOTP);
router.post('/verify', verifyOTP);


module.exports = router;