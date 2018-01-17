
const routes = require('express').Router();

routes.get('/',(req,res)=>{
    res.statusCode(200).json({message:'This is the thing object'})
})

module.exports = routes;