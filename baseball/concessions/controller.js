let hasOwnProperties = require('../../lib/util').hasOwnProperties;
let concessionController = require('./module');


const concessions = [{
  name: 'hotDog',
    price: 7,
    image: 'linkToS3PathToImage'
},{
    name: 'pizza',
    price: 7,
    image: 'linkToS3PathToImage'
},{
    name: 'soda',
    price: 6,
    image: 'linkToS3PathToImage'
}];

/**
 * Create a concession
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @returns response {Promise} - player information, and updated count
 */
function createConcession(req, res) {
  return new Promise((resolve) => {
    return resolve(concessionController.createConcession());
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
 * Find a concession
 * @param req {Object} - Express request object
 * @param res {Object} - Express response object
 * @returns response {Promise} - player information, and updated count
 */
function findConcession(req, res) {
  return new Promise((resolve) => {
    return resolve(concessionController.findConcession());
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
    createConcession: createConcession,
    findConcession: findConcession,
};
