const express = require('express');
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

// GET single user
router.get('/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id}` });
});

// POST register user
router.post('/register', (req, res) => {
  res.json({ message: 'Register new user', data: req.body });
});

// POST login user
router.post('/login', (req, res) => {
  res.json({ message: 'User login', data: req.body });
});

// PUT update user
router.put('/:id', (req, res) => {
  res.json({ message: `Update user ${req.params.id}`, data: req.body });
});

// DELETE user
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user ${req.params.id}` });
});

module.exports = router;
