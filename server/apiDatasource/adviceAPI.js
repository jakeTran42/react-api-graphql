const request = require("request-promise");

module.exports = ChuckAPI = async () => {
    
    var options = { method: 'GET',
        url: 'https://api.adviceslip.com/advice',
        headers: { 'Postman-Token': 'ae218ae3-e496-41f0-ae33-d56231fdb974',
            'cache-control': 'no-cache' },
        json: true
        };

    try {
        var result = await request(options);
        const data = { apiID: 5, identifier: 'advice', id: result.slip.slip_id, advice: result.slip.advice}
        return data;
    } catch (err) {
        console.error(err);
    }
}
