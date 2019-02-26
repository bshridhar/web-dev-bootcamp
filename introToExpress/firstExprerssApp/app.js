var express = require("express");
var app = express();

// Routes
// "/" => "Hi there!!!"
app.get("/", function(req, res) {
    res.send("Hi There!!!");
});
// "/bye" => "Goodbye!!!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!!!");
});
// "/dog" => "Meow!!!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to '/dog!!!' ");
    res.send("MEOW!!!");
});
app.get("/r/:subRedditName", function(req, res) {
   var subReddit = req.params.subRedditName;
   res.send("Welcome to "+ subReddit +" sub reddit page");
});
app.get("/r/:subRedditName/comments/:id/:title", function(req, res) {
    console.log(req.params);
   res.send("Welcome to comments page");
});
app.get("*", function(req, res) {
   res.send("You are a star");
});

// Tell express to listen for requests (start server)
app.listen(3000, function () {
    console.log("Server has started")
});