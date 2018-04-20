let Player = require('../../models/Player').Player;

/**
 * Create a Player.
 * @returns {Promise} Returns the count of how many players were created.
 */
function createPlayer() {
  return Player.create({})
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

/**
 * Find a player.
 * @returns {Promise} Returns the players information.
 */
function findPlayer() {
  return Player.find({}).lean()
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

module.exports = {
    createPlayer: createPlayer,
    findPlayer: findPlayer,
};
