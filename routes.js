var express = require("express");

var router = express.Router();
router.get("/",function(req,res){
console.log("I am on the start page view now");
res.render("index");

});

module.exports = router;