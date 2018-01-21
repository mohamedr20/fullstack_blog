const app = require('../../server.js');
// const request = require('supertest');
const User  = require('./user.model.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const controller = require('./user.controller.js')
let should = chai.should()


let newUser;
chai.use(chaiHttp);
describe('User API Test',function(){

    describe('GET /api/users',function(){
        it('it should GET all the Users',function(done){
            chai.request(app)
            .get('/api/users')
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('array');
                res.body.length.should.be.above(0)
                done()
            })
        })
    })

    describe('POST /api/users',function(){
        let newUser = {
            username:"mohamedr333",
            password:"hellofromtheother",
            email:"email333@email.com",
            bio:"There was a man child",
            image_url:"image.png"
        }

        it('it should POST a single User',function(done){
            chai.request(app)
            .post('/api/users')
            .send(newUser)
            .end((err,res)=>{
                console.log(res.body)
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('success').eql(true)
                done()
            })
        })
    })

})