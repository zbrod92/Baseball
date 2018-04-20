
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