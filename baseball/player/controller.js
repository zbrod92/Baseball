let hasOwnProperties = require('../../lib/util').hasOwnProperties;
let playerController = require('./module');

/**
 * Create a player
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @returns response {Promise} - player information, and updated count
 */
function createPlayer(req, res) {
  return new Promise((resolve) => {
    return resolve(playerController.createPlayer());
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
 * Find a player
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @returns response {Promise} - player information, and updated count
 */
function findPlayer(req, res) {
  return new Promise((resolve) => {
    return resolve(playerController.findPlayer());
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
  createPlayer: createPlayer,
    findPlayer: findPlayer,
};
