let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let fans = new mongoose.Schema({
    fanatacismMeter: {type: String},
    total: {type: Number},
    team: {type: ObjectId, ref: 'team'},
}, {
  strict: false
});

let Fans = mongoose.model('fans', fans);

module.exports = {
    Fans:Fans,
};
