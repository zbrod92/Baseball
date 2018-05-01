let Concession = require('../../models/Concessions').Concession;

/**
 * Create a concession.
 * @returns {Promise} Returns the count of how many concessions were created.
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
 * Find a concession.
 * @returns {Promise} Returns the concession information.
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
