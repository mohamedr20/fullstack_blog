let Article = require('./article.model');

module.exports = {
    create:function(req,res){
        let newArticle = new Article({
            slug: req.body.slug,
            title: req.body.title,
            description: req.body.description,
            body: req.body.body,
            tagList: req.body.tagList,
            favorited: req.body.favorited,
            favoritesCount: req.body.favoritesCount,
            author: {
              username: req.body.username,
              bio: req.body.bio,
              image: req.body.image,
              following: req.body.following
            }
        })
        Article.addArticle(newArticle,(err,article)=>{
            if(err){
                res.json({success:false,msg:'Failed to save article'})
            }
            res.status(201).json({success:true,msg:'Article was saved!'})
        })
    },
    findAll:function(req,res,next){
        Article.find({}).limit(req.params.limit).exec()
        .then((article)=>{
            res.status(200).json(article)
        })
        .catch(next)
    },
    findOne:function(req,res,next){
        Article.findById(req.params.id).exec()
        .then((article)=>{
            res.status(200).json(article)
        })
        .catch(next)
    },
    update:function(req,res,next){
        console.log(req.body)
        Article.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,result){
            if(err){
                throw new Error(err)
            }
            res.status(200).json({message:'Article was updated'})
        })
    },
    delete:function(req,res,next){
        Article.findByIdAndRemove(req.params.id).exec()
        .then((article)=>{
            res.status(204).end()
        })
        .catch(next)
    }
}