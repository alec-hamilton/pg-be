const episodesController = require('../controllers/episodesController');
const cors = require('cors');

const routes = (app) => {
    app.get('/episodes', cors(), episodesController.getEpisodes);
}

module.exports = routes;
