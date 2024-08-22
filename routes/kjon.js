const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('kjon', { title: 'kjon · life', description: 'd4 · implimentation' });
});

module.exports = router;