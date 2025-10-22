const express = require('express');
const router = express.Router();


const { readData } = require('../models/data');

// GET /stock
router.get('/', (req, res) => {
  const { stock } = readData();
  res.json(stock);
});

module.exports = router;
