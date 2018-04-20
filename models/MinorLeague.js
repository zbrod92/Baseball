let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let minorLeague = new mongoose.Schema({
    name: 'String',
    city: 'String',
    players: [{type: ObjectId, ref: 'player'}],
    coaches: [{type: ObjectId, ref: 'coaches'}],
    owner: {type: ObjectId, ref: 'owner'},
    concessions: [{type: ObjectId, ref: 'concession'}],
    parking: {type: ObjectId, ref: 'parking'},
    fans: {type: ObjectId, ref: 'fans'},
    mlbTeam: {type: ObjectId, ref: 'teams'}
}, {
  strict: false
});

let MinorLeague = mongoose.model('minorLeague', minorLeague);

module.exports = {
    MinorLeague:MinorLeague,
};
