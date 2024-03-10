var express = require('express');
var router = express.Router();
/* source quotes and maxims from TODO link to github quotes */
const quotes = require('../public/quotes.json');
const maxims = require('../public/maxims.json');
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
      backdropImg: 'images/unsplash/zdenek-machacek-yWSJtyCB2R4-unsplash.jpg',
      frontImg: 'images/unsplash/zdenek-machacek-yWSJtyCB2R4-unsplash.jpg',
      photoCreditLink: 'https://unsplash.com/@zmachacek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      photoPageLink: 'https://unsplash.com/photos/yWSJtyCB2R4'
    },
    {
      id: 3,
      title: 'poems',
      content: '( 雀の涙 : suzume no namida )',
      author: 'unkown',
      photographer: 'Amariei Mihai',
      backdropImg: 'images/unsplash/amariei-mihai-IccZ_e4Tci0-unsplash.jpg',
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
      frontImg: 'images/unsplash/leonardo-sanches-1nCYl1wBhv4-unsplash.jpg',
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
      photoCreditLink: '',
      photoPageLink: ''
    }
  ];

  const quotesArticle = articles.find(article => article.id === 2);

  // Get the current page number from the query parameters, default to 1
  const currentPage = parseInt(req.query.page) || 1;

  // Calculate the start and end indexes for the current page of quotes
  const startIndex = (currentPage - 1) * 7;
  const endIndex = startIndex + 7;

  // Get the quotes for the current page
  const pageQuotes = quotes.slice(startIndex, endIndex);

  // Update the content of the article with the quotes for the current page
  if (quotesArticle) {
    quotesArticle.content = pageQuotes.map((quote, index) => `
      <blockquote>
        ${quote.quote}
        <cite>${quote.author}</cite>
      </blockquote>
    `).join('');

    // Add the refresh button with Font Awesome icon
    quotesArticle.content += `
      <a href="/?page=${currentPage + 1}">
        <i class="fa fa-refresh" aria-hidden="true"></i> Refresh Quotes
      </a>
    `;
  }
  
  res.render('index', { 
    title: 'k jon quotes',
    description: 'quotes from k jon',
    articles: articles // pass articles data
  });

});

// Function to get a random selection of quotes
function getRandomQuotes(quotes, count) {
  const shuffled = quotes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

module.exports = router;
