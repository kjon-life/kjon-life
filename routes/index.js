var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // Sample article data
  const articles = [
    {
      id: words,
      title: 'words', 
      content: '(things i said)',
      author: 'k jon',
      backdropImg: 'images/unsplash/brett-jordan-POMpXtcVYHo-unsplash.jpg',
      frontImg: 'images/unsplash/brett-jordan-POMpXtcVYHo-unsplash.jpg',
      photoCreditLink: 'https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      photoPageLink: 'https://unsplash.com/photos/POMpXtcVYHo'
    },
    {
      id: quotes,
      title: 'quotes',
      content: 'things other people said (that i love)',
      author: 'Latin maxims',
      photographer: 'Zdeněk Macháček',
      backdropImg: 'images/unsplash/zdenek-machacek-yWSJtyCB2R4-unsplash.jpg',
      frontImg: 'images/unsplash/zdenek-machacek-yWSJtyCB2R4-unsplash.jpg',
      photoCreditLink: 'https://unsplash.com/@zmachacek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      photoPageLink: 'https://unsplash.com/photos/yWSJtyCB2R4'
    },
    {
      id: quotes,
      title: 'quotes',
      content: 'things other people said (that i love)',
      author: 'Latin maxims',
      photographer: 'Brett Jordan',
      backdropImg: 'images/unsplash/brett-jordan-POMpXtcVYHo-unsplash.jpg',
      frontImg: 'images/unsplash/amariei-mihai-IccZ_e4Tci0-unsplash.jpg',
      photoCreditLink: 'https://unsplash.com/@mex_face_poze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      photoPageLink: 'https://unsplash.com/photos/IccZ_e4Tci0'
    }
  ];

  res.render('index', { 
    title: 'k jon quotes',
    description: 'quotes from k jon',
    articles: articles // pass articles data
  });

});
module.exports = router;
