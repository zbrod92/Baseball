let User = require('../../models/User').User;

/**
 * Create a User.
 * @returns {Promise} Returns the count of how many users were created.
 */
function createUser() {
  return User.create({})
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

/**
 * Find a User.
 * @returns {Promise} Returns the users information.
 */
function findUser() {
  return User.find({}).lean()
    .catch((err) => {
      if(err) {
        return err;
      }
    });
}

module.exports = {
  createUser: createUser,
  findUser: findUser,
};
