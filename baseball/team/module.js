let Team = require('../../models/Team').Team;


/**
 * Find a team given a url.
 * @returns {Promise} the given team object
 */
function getTeam(url) {
  let query = {

  };
  return Team.find(query)
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
function all() {
  return Team.find()
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

/**
 * Create a pages record
 * @returns {Promise} the created record
 */
function dummy() {
let insert = {};
  return Team.create(insert)
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

function extractIds(objectArray) {
  return new Promise((resolve) => {
    let idArray = [];
    objectArray.forEach((index) => {
      idArray.push(index['_id'])
    });
    return resolve(idArray);
  }).catch((err) => {
    if(err) {
      return err;
    }
  });
}

/**
 *
 * @param url {String} - the given url of the team to find
 * @returns {Promise} - the returned populated team record
 */
function combine(url) {
  return new Promise((resolve) => {
    let query= {
    };
    return resolve(Team.find(query)
        .populate('Team')
        // .populate('Players')
        // .populate('Owners')
        .exec())
  }).catch((err) => {
    if(err) {
      return err;
    }
  });
}

module.exports = {
    getTeam:getTeam,
    all: all,
    dummy: dummy,
    extractIds: extractIds,
    combine:combine,
    combine:
};
