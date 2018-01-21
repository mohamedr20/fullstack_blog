const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const mongoose_unique = require('mongoose-unique-validator');
const secret = require('../../config/config.js');
const bcrypt = require('bcrypt');

var UserSchema = Schema({
    username:{type: String,unique:true, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email:{type: String,unique:true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    bio:String,
    photo_url:String,
    password:String
},{timestamps:true})

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

UserSchema.plugin(mongoose_unique);
