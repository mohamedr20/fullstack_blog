let User=  require('./user.model');
const app = require('../../server.js')
const mongoose = require('mongoose');
const http = require('http');
var chai = require('chai');
const request = require('superagent');
chai.use(require('chai-as-promised'));
global.expect = chai.expect;
global.assert = chai.assert;
chai.should();

var server = http.createServer(app);

function startServer(){
    return server.listen(8000,function(){
        console.log(`Listening on port 8000 `+app.get('env'))
    })
}

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

describe('User Model Tests',function(){
    before(function(done){
        startServer()
        done()
    })
    beforeEach(function(done){
        genUser()
        done()
    })

    it('should have no user to begin',function(done){
        done()
        return expect(User.find({}).exec()).to.eventually.have.length(0)
    })
    it('username should be unique and not be able to duplicated',function(done){
        request
        .post('/api/users/register')
        .send(user)
        .set('accept','json')
        .end(res=>{
            console.log(res)
        })
        // return expect(user.save()
        // .then(function() {
        //   var userDup = genUser();
        //   return userDup.save();
        // })).to.be.rejected;
    })



    
    afterEach(function(done){
        done()
        return User.remove();
    })

    after(function(done){
        done()
        return startServer.close()
    })
})