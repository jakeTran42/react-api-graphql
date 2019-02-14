require('dotenv').config()
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(`${process.env.NEWS_KEY}`);

const data = []

newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us',
    sortBy: 'top'

  }).then(response => {
    response.articles.slice(0, 3).map((news) => {
        data.push({ source: news.source.name, title: news.title, articleURL: news.url, articleImg: news.urlToImage })
    })

  }).catch(err => {
      console.log(err)
  });

module.exports = {
    data
}