const dbService = require('../services/dbService');

let episodesCollection = null;

dbService.connectToDb().then((db) => episodesCollection = db.collection('episodes'));

const getEpisodes = async () => {
    console.log('Repository: getEpisodes');
    return await episodesCollection.find({}).toArray();
}

module.exports.getEpisodes = getEpisodes;
