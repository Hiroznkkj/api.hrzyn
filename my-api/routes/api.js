const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello world');
});

// Adicionando mais rotas na API
router.get('/users', (req, res) => {
  res.send('List of users');
});

router.get('/products', (req, res) => {
  res.send('List of products');
});

module.exports = router;
