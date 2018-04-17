let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let teams = new mongoose.Schema({
    players: [{type: ObjectId, ref: 'player'}],
    coaches: [{type: ObjectId, ref: 'coaches'}],
    owner: {type: ObjectId, ref: 'owner'},
    concessions: [{type: ObjectId, ref: 'concession'}],
    parking: {type: ObjectId, ref: 'parking'},
    fans: {type: ObjectId, ref: 'fans'},

}, {
  strict: false
});

let Teams = mongoose.model('teams', teams);

module.exports = {
  Teams:Teams,
};
