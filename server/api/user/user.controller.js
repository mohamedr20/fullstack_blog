
let User = require('./user.model');
let jwt = require('jsonwebtoken');
let config = require('../../config/config.js');

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
      return res.status(statusCode).send(err);
    };
  }

  function validationError(res, statusCode) {
    statusCode = statusCode || 422;
    return function(err) {
      return res.status(statusCode).json(err);
    };
  }

module.exports = {
    create:function(req,res){
        let newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        })
        console.log(newUser)
        User.addUser(newUser, (err, user) => {
            if(err) {
              res.json({success: false, msg: 'Failed to register user'});
            } else {
              res.status(201).send({success: true, msg: 'User registered'});
            }
          });
    },
    edit:function(req,res){

    },
    authenticate:function(req,res){
        let email= req.body.email;
        let password = req.body.password;
        User.getUserByEmail(email, (err, user) => {
          if(err) throw err;
          if(!user) {
            return res.json({success: false, msg: 'User not found'});
          }
          User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
              const token = jwt.sign({data: user}, config.secret, {
                expiresIn: 604800 // 1 week
              });
              res.json({
                success: true,
                token: 'JWT '+token,
                user: {
                  id: user._id,
                  name: user.name,
                  username: user.username,
                  email: user.email,
                }
              })
            } else {
              return res.json({success: false, msg: 'Wrong password'});
            }
          });
        });
    },
    findAll:function(req,res){
        return User.find({}).exec()
        .then(users=>{
            res.status(200).json(users)
        })
        .catch((err)=>handleError(err))
    },
    getSingleUser:function(req,res){
        return User.findById(req.params.id).exec()
        .then((user)=>{
            if(!user){
                return res.status(404).end();
            }
            res.json(user);
        })
        .catch(err=>handleError(err))
    },

    delete:function(req,res){
        return User.findByIdAndRemove(req.params.id).exec()
        .then(function(){
            res.status(204).end();
        })
        .catch((err)=>res.json(err))
    }

}