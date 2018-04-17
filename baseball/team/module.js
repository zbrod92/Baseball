let Page = require('../../models/Page').Pages;
let PagesTwo = require('../../models/PageTwo').PagesTwo;
let mongoose = require('mongoose');
let ObjectId = mongoose.Types.ObjectId;
let Product = require('../../models/Product').Product;
let Chapter = require('../../models/Chapter').Chapters;



/**
 * Get all pages.
 * @returns {Promise} Returns all team data
 */
function getPages() {
  return Page.find({})
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

/**
 * Find a team given a url.
 * @returns {Promise} the given team object
 */
function getPage(url) {
  let query = {
    url: url
  };
  return Page.find(query)
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
  return Page.find()
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
let insert = {"name":"Detox","__v":0,"slug":"detox","adName":"detox","sku":"SF-DT"};
  return Product.create(insert)
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

// TODO Should we include more than just the offerIds in the pages collection
// TODO would including the associated offer record in that db be a good idea instead of just the id?
// /**
//  * Get offers
//  * @returns {Promise} Returns the updated team record with the offer
//  */
//
//
// function getOffersByPageId(pageId)
// return Offer.findById(pageId)
//     .catch((err) => {
//       if(err) {
//         return err;
//       }
//     });
// }

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
      url: url
    };
    return resolve(Page.find(query)
        .populate('offers')
        .populate('product')
        .populate('chapters')
        .exec())
  }).catch((err) => {
    if(err) {
      return err;
    }
  });
}

module.exports = {
  getPage: getPage,
    getPages: getPages,
    extractIds: extractIds,
    all: all,
    dummy:dummy,
    combine:combine
};
