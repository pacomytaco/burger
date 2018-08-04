var connection = require('./connection.js');

var orm = {
    //create connection query that selecting everything from whatever the table input is + then use a callback to pass result into next file in file system that is contained in models folder
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, 
        result){
            if(err) throw err;
            cb(result)
        });
    },
    update: function(tableInput, condition, cb) {
        connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id=' +condition+ ';', function(err, result){
            if(err) throw err;
            cb(result);
        })
    },
    create: function(tableInput, val, cb){
        connection.query('INSERT INTO ' +tableInput+ " (burger_name) VALUES ('"+val+"');", function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    delete: function(tableInput, val, cb){
        connection.query('DELETE FROM ' +tableInput+ " (burger_name) VALUES ('"+val+"');", function (err, result){
            if(err) throw err;
            cb(result);
        })
    }

}
module.exports = orm;