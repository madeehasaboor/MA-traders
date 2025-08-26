const express = require('express');
const router = express.Router();

// GET all products
router.get('/', (req, res) => {
  res.json({ message: 'Get all products' });
});

// GET single product
router.get('/:id', (req, res) => {
  res.json({ message: `Get product ${req.params.id}` });
});

// POST new product
router.post('/', (req, res) => {
  res.json({ message: 'Create new product', data: req.body });
});

// PUT update product
router.put('/:id', (req, res) => {
  res.json({ message: `Update product ${req.params.id}`, data: req.body });
});

// DELETE product
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete product ${req.params.id}` });
});

module.exports = router;
