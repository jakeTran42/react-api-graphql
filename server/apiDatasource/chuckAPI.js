const request = require("request-promise");

module.exports = ChuckAPI = async () => {
    
    var options = { method: 'GET',
        url: 'http://api.icndb.com/jokes/random',
        headers: 
        { 'Postman-Token': '774af781-d4b0-45b7-94f6-7c6e14fb8865',
            'cache-control': 'no-cache' },
        json: true
    };

    try {
        var result = await request(options);
        const data = { apiID: 1, identifier: 'chuck-joke', id: result.value.id, joke: result.value.joke}
        return data;
    } catch (err) {
        console.error(err);
    }
}
