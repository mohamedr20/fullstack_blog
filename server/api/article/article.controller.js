let Article = require('./article.model');

module.exports = {
    create:function(req,res){
        let newArticle = new Article({
            slug: req.params.slug,
            title: req.params.title,
            description: req.params.description,
            body: req.params.body,
            tagList: req.params.tagList,
            favorited: req.params.favorited,
            favoritesCount: req.params.favoritesCount,
            author: {
              username: req.params.username,
              bio: req.params.bio,
              image: req.params.image,
              following: req.params.following
            }
        })
        Article.addArticle(newArticle,(err,article)=>{
            if(err){
                res.json({success:false,msg:'Failed to save article'})
            }
            res.status(201).json({success:true,msg:'Article was saved!'})
        })
    },
    findAll:function(req,res){
        Article.find({}).limit(req.params.limit).exec()
        .then((article)=>{
            res.status(200).json(article)
        })
        .catch((err)=>console.log(err))
    },
    findOne:function(req,res){
        Article.findById(req.params.id).exec()
        .then((article)=>{
            res.status(200).json(article)
        })
        .catch((err)=>console.log(err))
    },
    delete:function(req,res){
        Article.findByIdAndRemove(req.params.id).exec()
        .then((article)=>{
            res.status(204).end()
        })
        .catch((err)=>console.log(err))
    }

}