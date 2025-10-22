const express = require('express');
const router = express.Router();


const { readData } = require('../models/data');

// POST /login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const { users } = readData();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, user: { id: user.id, name: user.name, role: user.role } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
