const chai  = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const controller = require('./user.controller');

describe('Routes',()=>{
    describe('GET Users',()=>{
        it('should respond',()=>{
            let req,res,spy;
            req = res  = {};
            spy = res.send = sinon.spy();
            controller.findAll(req,res);
            expect(spy.calledOnce).to.equal(true);
        })
    })
})