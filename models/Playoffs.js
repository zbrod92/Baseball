let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
// record for each game
// seperate collection with aggregated stats
let playoffs = new mongoose.Schema({
    //  wildCardAL, wildCardNL ,alds, nlds, alcs, nlcs, worldSeries
    round: [{type: String}],
    year: 'String',
    homeTeam: {type: ObjectId, ref: 'teams'},
    awayTeam: {type: ObjectId, ref: 'teams'},
    score: {type: String},
    fansTotal: Number,
    tvChannel: 'String',
}, {
  strict: false
});

let Playoffs = mongoose.model('playoffs', playoffs);

module.exports = {
    Playoffs:Playoffs,
};
