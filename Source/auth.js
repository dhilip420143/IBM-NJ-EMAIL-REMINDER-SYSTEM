const express = require('express');
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
  res.send({ message: 'Login route working!' });
});

// Dummy register route
router.post('/register', (req, res) => {
  res.send({ message: 'Register route working!' });
});

module.exports = router;
