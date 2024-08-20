const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('color_play', { title: 'kjon · life', description: 'scss · implimentation' });
});

module.exports = router;