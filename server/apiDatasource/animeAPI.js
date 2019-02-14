const request = require("request-promise");

module.exports = AnimeAPI = async () => {

    const season = ['winter', 'winter', 'winter','spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall']

    var d = new Date();
    var currentYear = d.getFullYear().toString();
    var currentMonth = d.getMonth();
    var currentSeason = season[currentMonth-1]

    var options = { method: 'GET',
        url: 'https://kitsu.io/api/edge/anime',
        qs: 
        { 'fields[anime]': 'id,titles,averageRating,posterImage,nsfw,status',
            'filter[seasonYear]': `${currentYear}`,
            'filter[season]': `${currentSeason}`,
            'page[limit]': '3',
            'sort': 'popularityRank' },
        headers: 
        { 'Postman-Token': 'f7b36636-cfc4-481b-93c3-b17b291cb73c',
            'cache-control': 'no-cache',
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json' },
        json: true
    };

    try {
        var result = await request(options).then((res) => {
            const animes = res.data.map((anime) => {
                const id = anime.id
                const title = anime.attributes.titles.en_jp
                const rating = Number(anime.attributes.averageRating)
                const nsfw = anime.attributes.nsfw
                const status = anime.attributes.status
                const poster = anime.attributes.posterImage.medium

                return {
                    id, title, rating, nsfw, status, poster
                }
            })

            return animes
        });
        // console.log(result)
        return result

    } catch (err) {
        console.log(err)
    }

}