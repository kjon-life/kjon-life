var express = require('express');
var router = express.Router();
/* source quotes and maxims from TODO link to github quotes */
const quotes = require('../quotes.json');
const maxims = require('../maxims.json');
/* const articles = require('../articles.json'); */

/* GET home page. */
router.get('/', function(req, res, next) {

  // Sample article data
  const articles = [
    {
      id: 1,
      title: 'words', 
      content: '(things i said)',
      author: 'k jon',
      backdropImg: 'images/unsplash/brett-jordan-POMpXtcVYHo-unsplash.jpg',
      frontImg: 'images/unsplash/brett-jordan-POMpXtcVYHo-unsplash.jpg',
      photoCreditLink: 'https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      photoPageLink: 'https://unsplash.com/photos/POMpXtcVYHo'
    },
    {
      id: 2,
      title: 'quotes',
      content: 'things other people said (that i love)',
      author: 'Latin maxims',
      photographer: 'Zdeněk Macháček',
      backdropImg: 'images/unsplash/amariei-mihai-IccZ_e4Tci0-unsplash.jpg',
      frontImg: 'images/unsplash/amariei-mihai-IccZ_e4Tci0-unsplash.jpg',
      photoCreditLink: 'https://unsplash.com/@mex_face_poze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      photoPageLink: 'https://unsplash.com/photos/IccZ_e4Tci0'
    },
    {
      id: 3,
      title: 'poems',
      content: '( 雀の涙 : suzume no namida )',
      author: 'unkown',
      photographer: 'Amariei Mihai',
      backdropImg: 'images/unsplash/brett-jordan-POMpXtcVYHo-unsplash.jpg',
      frontImg: 'images/unsplash/amariei-mihai-IccZ_e4Tci0-unsplash.jpg',
      photoCreditLink: 'https://unsplash.com/@mex_face_poze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      photoPageLink: 'https://unsplash.com/photos/IccZ_e4Tci0'
    },
    {
      id: 4,
      title: 'poems',
      content: 'the perfect day',
      author: 'from "Many Winters"',
      photographer: 'Leonardo Sanches',
      backdropImg: 'images/unsplash/leonardo-sanches-1nCYl1wBhv4-unsplash.jpg',
      frontImg: 'images/unsplash/amariei-mihai-IccZ_e4Tci0-unsplash.jpg',
      photoCreditLink: 'https://unsplash.com/ja/@lesanches?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      photoPageLink: 'https://unsplash.com/photos/1nCYl1wBhv4'
    },
    {
      id: 5,
      title: 'poems', 
      content: '( 雀の涙 : suzume no namida )',
      author: 'XXXXXX',
      photographer: 'k jon',
      backdropImg: 'images/curious-pug-enterprise/curious-pug-dark.png',
      frontImg: 'images/curious-pug-enterprise/curious-pug-dark.png',
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
