var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res) {
    //calling burger.all and passing burger data into function
    //calling burger.all w/i burger.js file which is calling orm.all w/i orm.js file
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index', {burger_data});
    });
});

router.put('/burgers/update', function(req,res) {
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    });
});

router.post('/burgers/delete', function(req, res) {
    burger.delete(req.body.burger_name, function(result){
        res.redirect('/');
    })
})

module.exports = router;
