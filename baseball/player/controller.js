let hasOwnProperties = require('../../lib/util').hasOwnProperties;
let userController = require('./module');

/**
 * Create a player
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @returns response {Promise} - player information, and updated count
 */
function createUser(req, res) {
  return new Promise((resolve) => {
    return resolve(userController.createUser());
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
function findUser(req, res) {
  return new Promise((resolve) => {
    return resolve(userController.findUser());
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
  createUser: createUser,
  findUser: findUser,
};
