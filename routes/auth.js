const express = require('express');
const { login, usersDetails } = require('../controllers/auth');
const router = express.Router();

router.post("/login" , login)
router.get("/users" , usersDetails)

module.exports = router;
