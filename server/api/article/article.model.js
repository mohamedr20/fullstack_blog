const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const mongoose_unique = require('mongoose-unique-validator');

let articleSchema  = new Schema({
    slug:String,
    title:String,
    description:String,
    body:String,
    tagList:[{type:String}],
    favorited:Boolean,
    favoritesCount:Number,
    author:{
        username:String,
        bio:String,
        image:String,
        following:Boolean
    }
},{timestamps:true})

const Article = module.exports = mongoose.model('Article',articleSchema);

module.exports.addArticle = function(newArticle,callback){
    newArticle.save(callback)
}