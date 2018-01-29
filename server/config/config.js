
let db_user = 'user';
let db_password = 'secret';

function checkEnviroment(){
    let db_uri;
    if(process.env.NODE_ENV === 'test'){
        db_uri = `mongodb://${db_user}:${db_password}@ds117888.mlab.com:17888/full-stack-blog-test`
        return db_uri;
    }
    else{
        db_uri = `mongodb://${db_user}:${db_password}@ds159997.mlab.com:59997/fullstack_blog`
        return db_uri
    }
}

module.exports = {
    db_uri:checkEnviroment(),
    port:process.env.port || 8080,
    secret:'jwt-secret'
}