var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("home");
});

app.get("/friends", function(req, res) {
    var friends = ['Don', 'Trycia', 'Kelton', 'Chad', 'Brandi', 'Tania', 'Susana']
    res.render("friends", {friends: friends});
 });

 app.post("/addfriend", function(req, res) {
    res.send()
 });

app.listen(3000, function(){
    console.log("Server has been started");
});