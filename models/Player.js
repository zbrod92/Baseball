let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let player = new mongoose.Schema({
    // eventually for making new players i will need a bank of first and last names
    firstName: 'String',
    lastName: 'String',
    nickName: 'String',
    homeTown: 'String',
    college: 'String',
    personalCoolFacts: [{type: String}],
    yearsInLeague: Number,
    // show current teams and past teams, current team in position [0]
    team: [{type: ObjectId, ref: 'team'}],
    position: {type: String},
    owner: {type: ObjectId, ref: 'owner'},
    fans: {type: ObjectId, ref: 'fans'},
    jerseySales: {type: Number},
    endorsements: {type: String}
}, {
  strict: false
});

let Player = mongoose.model('player', player);

module.exports = {
    Player:Player,
};
