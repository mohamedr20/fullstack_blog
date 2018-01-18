
let User = require('./user.model');

module.exports = {
    create:function(req,res){
        let newUser = new User(req.body);
        newUser.save()
    }
}