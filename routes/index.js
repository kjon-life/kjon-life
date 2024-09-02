const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'kjon · life', description: 'd4 · implimentation' });
});

module.exports = router;