import express from require('express');
import router from express.Router();

import { createOTP, verifyOTP } from require('../controllers/userControllers');


router.post('/create', createOTP);
router.post('/verify', verifyOTP);


export default router;