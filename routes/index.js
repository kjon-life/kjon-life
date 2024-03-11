var express = require('express');
var router = express.Router();
/* source quotes and maxims from TODO link to github quotes */
const quotesData = require('../public/quotes.json');
const maxims = require('../public/maxims.json');
const articles = require('../public/articles.json'); 

/* GET home page. */
router.get('/', function(req, res, next) {

  const title = req.body.title  || '';
  const description = req.body.description || '';
  



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

    if (pageQuotes.length > 0) {
      article.content = pageQuotes.map((quote, index) => `
        <div class="box">
          <blockquote>
            ${quote.quote}
            <cite>${quote.author}</cite>
          </blockquote>
        </div>
      `).join('');

      if (endIndex < quotes.length) {
        article.content += `
          <a href="/?page=${currentPage + 1}">
            <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
          </a>
        `;
      }
    } else {
      const defaultQuote = quotes.find(quote => quote.default);
      if (defaultQuote) {
        article.content = `
          <div class="box">
            <blockquote>
              ${defaultQuote.quote}
              <cite>${defaultQuote.author}</cite>
            </blockquote>
          </div>
        `;
      } else {
        article.content = `
          <div class="box">
            <p>No more quotes available.</p>
          </div>
        `;
      }
    }
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

  res.render('index', { articles, title, description });
});

module.exports = router;