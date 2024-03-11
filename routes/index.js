var express = require('express');
var router = express.Router();
/* source quotes and maxims from TODO link to github quotes */
const quotesData = require('../public/quotes.json');
const maxims = require('../public/maxims.json');
/* const articles = require('../articles.json'); */

/* GET home page. */
router.get('/', function(req, res, next) {

  const title = req.body.title  || '';
  const description = req.body.description || '';
  

  // Sample article data
  const articles = [
    {
      "id":1,
      "title":"words",
      "content":"(things i said)",
      "author":"k jon",
      "photographer":"Brett Jordan",
      "backdropImg":"images/unsplash/brett-jordan-POMpXtcVYHo-unsplash.jpg",
      "frontImg":"images/unsplash/brett-jordan-POMpXtcVYHo-unsplash.jpg",
      "photoCreditLink":"https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      "photoPageLink":"https://unsplash.com/photos/POMpXtcVYHo"
   },
   {
      "id":2,
      "title":"quotes",
      "content":"things other people said (that i love)",
      "author":"as atrributed",
      "photographer":"Zdeněk Macháček",
      "backdropImg":"images/unsplash/zdenek-machacek-yWSJtyCB2R4-unsplash.jpg",
      "frontImg":"images/unsplash/zdenek-machacek-yWSJtyCB2R4-unsplash.jpg",
      "photoCreditLink":"https://unsplash.com/@zmachacek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      "photoPageLink":"https://unsplash.com/photos/yWSJtyCB2R4"
   },
   {
      "id":3,
      "title":"lost words for beautiful things",
      "content":"( 雀の涙 : suzume no namida )",
      "author":"unknown",
      "photographer":"Amariei Mihai",
      "backdropImg":"images/unsplash/amariei-mihai-IccZ_e4Tci0-unsplash.jpg",
      "frontImg":"images/unsplash/amariei-mihai-IccZ_e4Tci0-unsplash.jpg",
      "photoCreditLink":"https://unsplash.com/@mex_face_poze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      "photoPageLink":"https://unsplash.com/photos/IccZ_e4Tci0"
   },
   {
      "id":4,
      "title":"when all is",
      "content":"the perfect day",
      "author":"from \"Many Winters\"",
      "photographer":"Leonardo Sanches",
      "backdropImg":"images/unsplash/leonardo-sanches-1nCYl1wBhv4-unsplash.jpg",
      "frontImg":"images/unsplash/leonardo-sanches-1nCYl1wBhv4-unsplash.jpg",
      "photoCreditLink":"https://unsplash.com/ja/@lesanches?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      "photoPageLink":"https://unsplash.com/photos/1nCYl1wBhv4"
   },
   {
      "id":5,
      "title":"music",
      "content":"( add playlist )",
      "author":"XXXXXX",
      "photographer":"k jon",
      "backdropImg":"images/curious-pug-enterprise/curious-pug-dark.png",
      "frontImg":"images/curious-pug-enterprise/curious-pug-dark.png",
      "photoCreditLink":"",
      "photoPageLink":""
   }
  ];

  // Get the quotes from the quotes.json file
  const quotes = quotesData.quotes || [];

  // Filter quotes by author "k jon"
  const jjQuotes = quotes.filter(quote => quote.author === "k jon");

  // Filter quotes by authors other than "k jon"
  const otherQuotes = quotes.filter(quote => quote.author !== "k jon");

  // Function to update article content with quotes
  function updateArticleContent(article, quotes) {
    const currentPage = parseInt(req.query.page) || 1;
    const startIndex = (currentPage - 1) * 3;
    const endIndex = startIndex + 3;
    const pageQuotes = quotes.slice(startIndex, endIndex);

    article.content = pageQuotes.map((quote, index) => `
      <blockquote>
        ${quote.quote}
        <cite>${quote.author}</cite>
      </blockquote>
    `).join('');

    article.content += `
      <a href="/?page=${currentPage + 1}">
        <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
      </a>
    `;
  }

  // Update article 1 with quotes by "k jon"
  const article1 = articles.find(article => article.id === 1);
  if (article1) {
    updateArticleContent(article1, jjQuotes);
  }

  // Update article 2 with quotes by authors other than "k jon"
  const article2 = articles.find(article => article.id === 2);
  if (article2) {
    updateArticleContent(article2, otherQuotes);
  }

  // Function to get a random selection of quotes
  function getRandomQuotes(quotes, count) {
    const shuffled = quotes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  res.render('index', { articles, title, description });
});

module.exports = router;