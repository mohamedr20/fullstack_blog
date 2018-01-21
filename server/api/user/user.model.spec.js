let User=  require('./user.model');
const mongoose = require('mongoose');
const config = require('../../config/config.js')
const http = require('http');
var chai = require('chai');
const express = require('express')
var app = express();
var server = http.createServer(app);
const request = require('superagent');
chai.use(require('chai-as-promised'));
global.expect = chai.expect;
global.assert = chai.assert;
chai.should();

var server = http.createServer(app);

let user;
let genUser = function(){
    user = new User({
        username:'username',
        password:'password',
        bio:'bio',
        photo_url:'dummy_url',
        email:'test@email.com'
    })
    return user
}

function startServer() {
    return server.listen(8000, function() {
      console.log('Express server listening');
    });
  }

describe('User Model Tests',function(){
    before(function(){
        this.timeout(10000)
        startServer()
        return User.remove()
    })
    beforeEach(function(done){
        genUser()
    })

    afterEach(function(){
        return User.remove()
    })
    
    after(function(done) {
     server.on('close',()=>done())
     mongoose.connection.close();
     server.close()
    });

    it('should have no user to begin',function(done){
        return expect(User.find({}).exec()).to
        .eventually.have.length(0);
    })
        
    it('username dummy test',function(){
        expect(2+3).to.equal(5)
    })
    it('username should be unique and not be able to duplicated',function(){
        // return expect(user.save()
        // .then(()=>{
        //     var userDuplicate = genUser();
        //     return userDuplicate.save()
        // })).to.be.rejectedWith(Error)
        // .then((done)=>{
        //     done()
        // })
        // return expect(user.save()
        // .then(function() {
        //   var userDup = genUser();
        //   return userDup.save();
        // })).to.be.rejected;
    })
})