const episodesRepository = require('../repositories/episodesRepository');

const getEpisodes = async () => {
    console.log('Service: getEpisodes');
    return await episodesRepository.getEpisodes();
}

module.exports.getEpisodes = getEpisodes;
