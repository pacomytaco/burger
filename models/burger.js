var orm = require('../configuration/orm.js');

var burger = {
    all: function(cb) {
        //calling orm.all n inserting burgers as table input n running function of response as callback sent into routes.js file
        orm.all('burgers', function(res){
            cb(res)
        })
    },
    update: function(id,cb){
        orm.update('burgers', id, cb);
    },
    create: function(name, cb){
        orm.create('burgers', name, cb);
    },
    delete: function(name, cb){
        orm.delete('burgers', name, cb);
    } 
}

module.exports = burger;