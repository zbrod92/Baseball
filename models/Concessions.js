let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let concession = new mongoose.Schema({
    players: [{type: ObjectId, ref: 'player'}],
    coaches: [{type: ObjectId, ref: 'coaches'}],
    owner: {type: ObjectId, ref: 'owner'},
    concessions: [{type: ObjectId, ref: 'concession'}],
    parking: {type: ObjectId, ref: 'parking'},
    fans: {type: ObjectId, ref: 'fans'},

}, {
  strict: false
});

let Concession = mongoose.model('concession', concession);

module.exports = {
    Concession:Concession,
};
