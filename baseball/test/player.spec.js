let chai =require('chai');
let sinon = require('sinon');
let Player = require('../../models/Player').Player;
let playerController = require('../player/module');
const expect = chai.expect;


describe('player', function() {
    before(function() {
        // connect to MongoDB test database, then destroy all Chats, then create some
        return Promise.all([Player.remove({})]);
    });
    context('createUser()', function() {
        it('should create a user', function() {
            return playerController.createPlayer().then((user) => {
                expect(user).to.be.a('object');
            });
        });
    });
    context('findUser()', function() {
        it('should create a user', function() {
            return playerController.findPlayer().then((user) => {
                expect(user).to.be.a('array');
            });
        });
    });
});