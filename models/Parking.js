let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let parking = new mongoose.Schema({
    // different parking tiers, cheap, and expensive. Less expensive available
    price: [{type: Number}],
    // total parking spots
    occupancyTotal: [{type: Number}],
    team: {type: ObjectId, ref: 'teams'},
    // security guards
    // incorporate thefts and security costs
    security: {type: ObjectId},

}, {
  strict: false
});

let Parking = mongoose.model('parking', parking);

module.exports = {
    Parking:Parking,
};
