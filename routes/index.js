const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'kjon · life', description: 'I help people build systems that work.' });
});

module.exports = router;