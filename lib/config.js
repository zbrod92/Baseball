//let uri = 'mongodb://localhost/test';
let uri = '';
let mongoose = require('mongoose');

let options = {

};

if(process.env.commonSetup === 'production') {
  uri = '';
}

if(process.env.commonSetup === 'staging') {
  options = {
    'user': '',
    'pass': '',
    'dbName': ''
  };
  uri = '';
}
if(process.env.commonSetup === 'localhost') {
  uri = 'mongodb://localhost/test';
}
if(process.env.commonSetup === 'atlas') {
  uri = '';
}
if(process.env.commonSetup === 'test') {
  uri = 'mongodb://localhost/testDatabase';
}
let arrayOfPossibleEnv = [
    'production',
    'staging',
    'localhost',
    'atlas',
    'test',
];
if(arrayOfPossibleEnv.includes(process.env.commonSetup) === false) {
    throw new Error('The environment you tried to input is invalid, please enter a valid environment before proceeding')
}



mongoose.connect(uri, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!')
});

module.exports = {
	db:db
};

//exports.pages  = pages
