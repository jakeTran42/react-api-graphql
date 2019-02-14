const WeatherAPI = require('../../apiDatasource/weatherAPI')
const ArticleAPI = require('../../apiDatasource/newsAPI')
const AnimeAPI = require('../../apiDatasource/animeAPI')

async function weather(parents, {city}) {
    return await WeatherAPI(city)
}

async function newsfeed() {
    const apiID = 3
    const identifier = 'articles'
    const news = await ArticleAPI.data

    return { apiID, identifier, news }
}

async function anime() {
    const apiID = 4
    const identifier = 'anime'
    const animes =  await AnimeAPI()
    return {apiID, identifier, animes}
}

module.exports = {
    weather, newsfeed, anime
}