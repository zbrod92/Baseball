let hasOwnProperties = require('../../lib/util').hasOwnProperties;
let gameController = require('./module');

/**
 * Create a game
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @returns response {Promise} - game information, and updated count
 */
function createGame(req, res) {
    return new Promise((resolve) => {
        return resolve(gameController.createGame());
    })
        .then((response) => {
            return res.json({
                created: response['_doc'],
            });
        })
        .catch((err) => {
            if(err) {
                return res.json(err.message);
            }
        });
}

/**
 * Find a game
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @returns response {Promise} - game information, and updated count
 */
function findGame(req, res) {
    return new Promise((resolve) => {
        return resolve(gameController.findGame());
    })
        .then((response) => {
            return res.json(response);
        })
        .catch((err) => {
            if(err) {
                return res.json(err.message);
            }
        });
}

module.exports = {
    createGame,
    findGame
};
