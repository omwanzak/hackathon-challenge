const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');

// Import routes
const authRoutes = require('./routes/auth');
const stockRoutes = require('./routes/stock');
const requisitionsRoutes = require('./routes/requisitions');


// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use('/auth', authRoutes);
app.use('/stock', stockRoutes);
app.use('/requisitions', requisitionsRoutes);

app.get('/', (req, res) => {
  res.send('FMCG Stock Management Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
