let Game = require('../../models/Game').Game;

/**
 * Find a game .
 * @returns {Promise} the given team object
 */
function createGame() {
  let query = {

  };
  return Game.find(query)
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

/**
 * Get all pages.
 * @returns {Promise} Returns the pages array
 */
function findGame() {
  return Game.find()
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

module.exports = {
    createGame,
    findGame
};
