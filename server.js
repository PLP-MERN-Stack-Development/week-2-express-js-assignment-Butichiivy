const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const productRoutes = require('./routes/products');
const { errorHandler, notFoundHandler } = require('./utils/errors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Protected routes
app.use('/api/products', auth, productRoutes);

// Error handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
