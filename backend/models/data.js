const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../seed_data.json');

function readData() {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}

module.exports = { readData };
