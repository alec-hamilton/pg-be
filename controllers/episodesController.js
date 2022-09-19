const episodesService = require('../services/episodesService');

const getEpisodes = (req, res) => {
    console.log('Controller: getEpisodes');
    episodesService.getEpisodes().then((allEpisodes) => res.json(allEpisodes));
}

module.exports.getEpisodes = getEpisodes;
