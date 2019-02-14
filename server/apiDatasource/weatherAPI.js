require('dotenv').config()
const request = require("request-promise");

module.exports = WeatherAPI = async (city) => {
    const apiKey = process.env.WEATHER_KEY

    var options = { method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        qs: 
        { q: `${city},us`,
            APPID: `${apiKey}` },
        headers: 
        { 'Postman-Token': '774af781-d4b0-45b7-94f6-7c6e14fb8865',
            'cache-control': 'no-cache' },
        json: true
    };

    try {
        var result = await request(options);
        const data = { apiID: 2, identifier: 'weather', id: result.id, name: result.name, condition: result.weather[0].description, iconURL: `http://openweathermap.org/img/w/${result.weather[0].icon}.png` }
        return data;
    } catch (err) {
        console.error(err);
    }
}