// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var prescriberinfo = new Schema({
  Gender: String,
  State:String,
  Speciality:String
}); 

// the schema is useless so far
// we need to create a model using it
var prescriberInfo = mongoose.model('prescriberinfo', prescriberinfo );

// make this available to our users in our Node applications
module.exports = prescriberInfo;