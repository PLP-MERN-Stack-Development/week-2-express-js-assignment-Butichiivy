const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const { validateProduct } = require('../middleware/validation');
const { NotFoundError } = require('../utils/errors');

// In-memory "database"
let products = [];

/** GET /api/products - List all products (with optional filtering & pagination) */
router.get('/', (req, res) => {
  const { category, page = 1, limit = 5 } = req.query;
  let result = products;

  if (category) {
    result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + Number(limit));

  res.json({ total: result.length, page: Number(page), data: paginated });
});

/** GET /api/products/search?name=phone - Search by name */
router.get('/search', (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ message: 'Search query "name" is required.' });

  const result = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  res.json(result);
});

/** GET /api/products/stats - Get product count per category */
router.get('/stats', (req, res) => {
  const stats = {};
  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });
  res.json(stats);
});

/** GET /api/products/:id - Get product by ID */
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new NotFoundError('Product not found'));
  res.json(product);
});

/** POST /api/products - Create new product */
router.post('/', validateProduct, (req, res) => {
  const newProduct = {
    id: uuidv4(),
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

/** PUT /api/products/:id - Update product */
router.put('/:id', validateProduct, (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

/** DELETE /api/products/:id - Delete product */
router.delete('/:id', (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
