const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('brand', { title: 'kjon · life', description: 'brand palette' });
});

module.exports = router;
