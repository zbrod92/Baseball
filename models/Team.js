let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let team = new mongoose.Schema({
    name: 'String',
    nickName: 'String',
    players: [{type: ObjectId, ref: 'player'}],
    coaches: [{type: ObjectId, ref: 'coaches'}],
    owner: {type: ObjectId, ref: 'owner'},
    concessions: [{type: ObjectId, ref: 'concession'}],
    parking: {type: ObjectId, ref: 'parking'},
    fans: {type: ObjectId, ref: 'fans'},
    // eventually make both home and away colors an array with multiple jerseys, but have one be a primary that is used most often
    homeColor: 'String',
    awayColors: 'String',
    worldSeries: {type: ObjectId, ref: 'parking'},
    year: Number

}, {
  strict: false
});

let Team = mongoose.model('team', team);

module.exports = {
  Team:Team,
};
