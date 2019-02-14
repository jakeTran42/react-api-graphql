const ChuckAPI = require('../../apiDatasource/chuckAPI')
const AdviceAPI = require('../../apiDatasource/adviceAPI')


async function api() {

    const chuckJoke = async function() {
        return await ChuckAPI()
    }

    const advice = async function() {
        return await AdviceAPI()
    }

    return {
        chuckJoke, advice
    }
}

function info() {
    return "This is an API aggregation using Graphql made by Jake Tran"
}

module.exports = {
    info,
    api
}