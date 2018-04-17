let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let coaches = new mongoose.Schema({
    type: 'String',

}, {
  strict: false
});

let Coaches = mongoose.model('coaches', coaches);

module.exports = {
    Coaches:Coaches,
};
