const express = require('express');
const router = express.Router();


const { readData } = require('../models/data');

// GET /requisitions
router.get('/', (req, res) => {
  const { requisitions } = readData();
  res.json(requisitions);
});

module.exports = router;
