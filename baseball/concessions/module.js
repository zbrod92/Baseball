let Concession = require('../../models/Concessions').Concession;

/**
 * Create a Player.
 * @returns {Promise} Returns the count of how many players were created.
 */
function createConcession(concession) {
    return new Promise((resolve) => {
        return resolve(Concession.create(concession));
    }).catch((err) => {
      if(err) {
        return err;
      }
    });
}

/**
 * Find a player.
 * @returns {Promise} Returns the players information.
 */
function findConcession(concession) {
    return new Promise((resolve) => {
        let query = {

        };
        return resolve(Concession.find(query).lean());
    }).catch((err) => {
      if(err) {
        return err;
      }
    });
}

module.exports = {
    createConcession,
    findConcession
};
