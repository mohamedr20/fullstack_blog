
let db_user = 'user';
let db_password = 'secret';

module.exports = {
    db_uri:`mongodb://${db_user}:${db_password}@ds159997.mlab.com:59997/fullstack_blog`,
    port:process.env.port || 8080,
    jwt:'jwt-secret'
}