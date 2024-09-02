const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('colorplay', { title: 'kjon · scss', description: 'scss · implimentation' });
});

module.exports = router;