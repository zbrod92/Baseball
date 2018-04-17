var config = require('./config')
,ObjectID = config.ObjectID
exports.lookupExistingByFieldValue = function (query, collection, validPost, fieldCheck, cb) {
	var errorMsg = null
	config.db.collection(collection).find(query).toArray(function(err, result) {
		if(err) {
		  errorMsg = 'Error attemping to lookup in database.'
		  cb(errorMsg, null)
		} else if(result && result[0]) {
			if(result[0]._id == validPost.validObject[fieldCheck]) {
				cb(null, "OK")
			} else {
			  errorMsg = 'Similar record already exists.'
			  cb(errorMsg, null)
			}
		} else {
			cb(null, "OK")
		}
	})
}
exports.insertObjectIntoDatabase = function (object, collection, cb) {
	var errorMsg = null
	config.db.collection(collection).insertOne(object, {
	}, function (err, result) {
		if(err) {
			errorMsg = err.message
			cb(errorMsg, null)
		} else if(result && result.ops) {
			cb(null, result.ops[0])
		} else {
			errorMsg = 'Unable to save object into database'
			cb(errorMsg, null)
		}
	})
}
exports.updateObjectInDatabase = function (query, setObject, unsetObject, collection, cb) {
  let modifier = {
  	$set : setObject
  }
  if(unsetObject && unsetObject != null) {
  	modifier.$unset = unsetObject
  }
  config.db.collection(collection).update(query, modifier, function (err, result) {
  	if(err) {
			cb(err.message, null)
  	} else {
  		cb(null, result)
  	}
  })
}
exports.deleteObjectInDatabase = function (id, collection, cb) {
	let query = {'_id': ObjectID(id)}
  config.db.collection(collection).remove(query, function (err, result) {
  	if(err) {
		cb(err.message, null)
  	} else {
  		cb(null, result)
  	}
  })
}

/**
 * @description checks if the object has the required fields and removes extra fields if they are not optional
 * @param  {Object} object - object to compare the properties
 * @param  {String[]} properties - array of string to check if the object has that property
 * @param  {String[]} optionals - array of strings that are optional properties
 * @return {Boolean}  true if all the properties are found in the object
 */
function hasOwnProperties(object, properties, optionals = []) {
  if (typeof object !== 'object' || Array.isArray(object)) {
    return false;
  }
  for (let key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      let index = properties.indexOf(key);
      let optionalIndex = optionals.indexOf(key);
      if (index === -1 && optionalIndex === -1) {
        delete object[key];
      } else {
        if (index !== -1) {
          properties.splice(index, 1);
        }
        if (optionalIndex !== -1) {
          optionals.splice(optionalIndex, 1);
        }
      }
    }
  }
  return properties.length === 0;
}

module.exports = {
  hasOwnProperties:hasOwnProperties
};